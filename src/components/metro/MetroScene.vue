<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { linePaths, resolveLine, stations, linesAt, river } from "@/lib/metroMap";
import { theme } from "@/lib/theme";
import type { LineId } from "@/data";

/**
 * The 3D metro scheme. On mount the flat 2D map lifts into perspective,
 * the lines grow along their routes, stations pop up and trains start running.
 * Stations are clickable and emit their project slug.
 */
const emit = defineEmits<{ select: [slug: string]; ready: [] }>();

const host = ref<HTMLDivElement | null>(null);
const canvasEl = ref<HTMLCanvasElement | null>(null);
const hovered = ref<string | null>(null);
const labels = stations.map((s) => ({ slug: s.slug, label: s.label }));
const labelEls = ref<HTMLElement[]>([]);

let renderer: THREE.WebGLRenderer | null = null;
let raf = 0;
let io: IntersectionObserver | null = null;
let ro: ResizeObserver | null = null;
let inView = true;
let disposeAll: (() => void) | null = null;
let applyColors: (() => void) | null = null;

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function cssColor(name: string): THREE.Color {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  // "345 93% 44%" → "hsl(345, 93%, 44%)"
  const parts = raw.split(/\s+/);
  const c = new THREE.Color();
  if (parts.length >= 3) c.setStyle(`hsl(${parts[0]}, ${parts[1]}, ${parts[2]})`);
  return c;
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

onMounted(() => {
  const canvas = canvasEl.value!;
  const el = host.value!;

  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch {
    return; // parent keeps the SVG scheme
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

  /* Lights */
  const hemi = new THREE.HemisphereLight(0xffffff, 0x8899aa, 1.6);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 2.2);
  sun.position.set(-4, 10, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera as THREE.OrthographicCamera;
  sc.left = -9; sc.right = 9; sc.top = 7; sc.bottom = -7;
  sun.shadow.radius = 6;
  sun.shadow.bias = -0.0005;
  scene.add(sun);

  const world = new THREE.Group();
  scene.add(world);

  /* Shadow-catching ground (transparent: the page background shows through) */
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 30),
    new THREE.ShadowMaterial({ opacity: 0.14 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  ground.receiveShadow = true;
  world.add(ground);

  /* The Neva */
  const riverCurve = new THREE.CatmullRomCurve3(river.map(([x, y]) => new THREE.Vector3(x, 0, y)), false, "centripetal");
  const riverMat = new THREE.MeshStandardMaterial({ roughness: 0.35, metalness: 0.0, transparent: true, opacity: 0.9 });
  const riverMesh = new THREE.Mesh(new THREE.TubeGeometry(riverCurve, 120, 0.55, 12, false), riverMat);
  riverMesh.scale.y = 0.04;
  riverMesh.position.y = -0.01;
  riverMesh.receiveShadow = true;
  world.add(riverMesh);

  /* Lines */
  type LineObj = { id: LineId; curve: THREE.CatmullRomCurve3; mesh: THREE.Mesh; mat: THREE.MeshStandardMaterial; total: number; delay: number };
  const lineObjs: LineObj[] = [];
  const TUBE_SEG = 260;
  const RAD_SEG = 12;
  linePaths.forEach((lp, i) => {
    const pts = resolveLine(lp).map(([x, y]) => new THREE.Vector3(x, 0.14, y));
    const curve = new THREE.CatmullRomCurve3(pts, false, "centripetal", 0.5);
    const geo = new THREE.TubeGeometry(curve, TUBE_SEG, 0.1, RAD_SEG, false);
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.42, metalness: 0.05 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    const total = geo.index ? geo.index.count : 0;
    geo.setDrawRange(0, reduce ? total : 0);
    world.add(mesh);
    lineObjs.push({ id: lp.id, curve, mesh, mat, total, delay: 0.25 + i * 0.16 });
  });

  /* Stations */
  const stationMat = new THREE.MeshStandardMaterial({ roughness: 0.3 });
  const ringMat = new THREE.MeshStandardMaterial({ roughness: 0.5 });
  type StationObj = { slug: string; group: THREE.Group; hit: THREE.Mesh; top: THREE.Vector3; delay: number };
  const stationObjs: StationObj[] = [];
  stations.forEach((s, i) => {
    const ls = linesAt(s.slug);
    const offs = ls.map((l) => l.offset);
    const min = Math.min(...offs);
    const max = Math.max(...offs);
    const span = max - min;
    const g = new THREE.Group();
    g.position.set(s.x, 0, s.y + (min + max) / 2);

    // body: a capsule for transfers, a puck otherwise
    const r = 0.2;
    const body = span > 0.01
      ? new THREE.Mesh(new THREE.CapsuleGeometry(r, span, 6, 16), stationMat)
      : new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.26, 28), stationMat);
    if (span > 0.01) {
      body.rotation.x = Math.PI / 2;
      body.scale.set(1, 1, 0.65);
    }
    body.position.y = 0.2;
    body.castShadow = true;
    g.add(body);

    // dark ring outline
    const ring = span > 0.01
      ? new THREE.Mesh(new THREE.CapsuleGeometry(r + 0.06, span, 6, 16), ringMat)
      : new THREE.Mesh(new THREE.CylinderGeometry(r + 0.06, r + 0.06, 0.2, 28), ringMat);
    if (span > 0.01) {
      ring.rotation.x = Math.PI / 2;
      ring.scale.set(1, 1, 0.5);
    }
    ring.position.y = 0.16;
    g.add(ring);

    // generous invisible hit area for the pointer
    const hit = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.55, 0.8, 12),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    hit.position.y = 0.3;
    hit.userData.slug = s.slug;
    g.add(hit);

    g.scale.setScalar(reduce ? 1 : 0.0001);
    world.add(g);
    stationObjs.push({ slug: s.slug, group: g, hit, top: new THREE.Vector3(s.x, 0.75, s.y + min), delay: 1.0 + i * 0.07 });
  });

  /* Trains: two three-car sets per line, shuttling end to end.
     Each car rides the curve on its own, so a set bends through the turns. */
  const CAR_L = 0.29;
  const CAR_GAP = 0.03;
  const CAR_W = 0.23;
  const CAR_H = 0.17;
  const RIDE_Y = 0.25 + CAR_H / 2; // car floor sits on top of the line tube

  const glassMat = new THREE.MeshStandardMaterial({ roughness: 0.12, metalness: 0.4 });
  const trimMat = new THREE.MeshStandardMaterial({ roughness: 0.5 });
  const undercarMat = new THREE.MeshStandardMaterial({ roughness: 0.8 });
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff1c4, emissive: 0xffd66b, emissiveIntensity: 1.6 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0xff5a5a, emissive: 0xff2b2b, emissiveIntensity: 1.3 });

  const bodyGeo = new RoundedBoxGeometry(CAR_W, CAR_H, CAR_L, 3, 0.045);
  const windowGeo = new THREE.BoxGeometry(CAR_W + 0.006, 0.055, 0.06);
  const stripeGeo = new THREE.BoxGeometry(CAR_W + 0.004, 0.012, CAR_L * 0.86);
  const roofGeo = new THREE.BoxGeometry(CAR_W * 0.46, 0.018, CAR_L * 0.8);
  const bogieGeo = new THREE.BoxGeometry(CAR_W * 0.7, 0.03, 0.07);
  const screenGeo = new THREE.BoxGeometry(CAR_W * 0.78, 0.06, 0.01);
  const lampGeo = new THREE.SphereGeometry(0.016, 10, 8);

  /** One car. `cab` puts a driver's cab on the car's -Z (−1) or +Z (+1) end. Returns its lamps. */
  function buildCar(bodyMat: THREE.Material, roofMat: THREE.Material, cab: -1 | 0 | 1) {
    const car = new THREE.Group();
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.castShadow = true;
    car.add(body);

    // side windows (one box runs through both sides); cab cars keep the cab end for the door
    const zs = cab ? [-cab * CAR_L * 0.3, -cab * CAR_L * 0.04] : [-CAR_L * 0.3, 0, CAR_L * 0.3];
    zs.forEach((z) => {
      const win = new THREE.Mesh(windowGeo, glassMat);
      win.position.set(0, 0.022, z);
      car.add(win);
    });
    const stripe = new THREE.Mesh(stripeGeo, trimMat);
    stripe.position.y = -0.028;
    car.add(stripe);
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = CAR_H / 2 - 0.002;
    car.add(roof);
    [-1, 1].forEach((side) => {
      const bogie = new THREE.Mesh(bogieGeo, undercarMat);
      bogie.position.set(0, -CAR_H / 2 - 0.006, side * CAR_L * 0.3);
      car.add(bogie);
    });

    const lamps: THREE.Mesh[] = [];
    if (cab) {
      const zEnd = cab * (CAR_L / 2 + 0.002);
      const screen = new THREE.Mesh(screenGeo, glassMat);
      screen.position.set(0, 0.022, zEnd);
      car.add(screen);
      [-1, 1].forEach((side) => {
        const lamp = new THREE.Mesh(lampGeo, headMat);
        lamp.position.set(side * CAR_W * 0.3, -0.035, zEnd);
        car.add(lamp);
        lamps.push(lamp);
      });
    }
    return { car, lamps };
  }

  type Train = {
    cars: THREE.Group[];
    lampsBack: THREE.Mesh[]; // lamps on the low-t end
    lampsFront: THREE.Mesh[]; // lamps on the high-t end
    bodyMat: THREE.MeshStandardMaterial;
    roofMat: THREE.MeshStandardMaterial;
    line: LineObj;
    step: number; // curve parameter between car centres
    t: number;
    dir: number;
    speed: number;
    lastDir: number;
  };
  const trains: Train[] = [];
  lineObjs.forEach((lo, i) => {
    const len = lo.curve.getLength();
    for (let k = 0; k < 2; k++) {
      const bodyMat = new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.05, emissiveIntensity: 0.22 });
      const roofMat = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.25 });
      const a = buildCar(bodyMat, roofMat, -1);
      const m = buildCar(bodyMat, roofMat, 0);
      const z = buildCar(bodyMat, roofMat, 1);
      const cars = [a.car, m.car, z.car];
      cars.forEach((c) => {
        c.visible = false;
        world.add(c);
      });
      trains.push({
        cars,
        lampsBack: a.lamps,
        lampsFront: z.lamps,
        bodyMat,
        roofMat,
        line: lo,
        step: (CAR_L + CAR_GAP) / len,
        t: k === 0 ? 0.1 + i * 0.05 : 0.62 - i * 0.04,
        dir: k === 0 ? 1 : -1,
        speed: (0.045 + (i % 3) * 0.008) * (10 / Math.max(6, len)),
        lastDir: 0,
      });
    }
  });

  /* Colours follow the theme tokens */
  applyColors = () => {
    lineObjs.forEach((lo) => lo.mat.color.copy(cssColor(`--${lo.id}`)));
    trains.forEach((tr) => {
      const c = cssColor(`--${tr.line.id}`);
      tr.bodyMat.color.copy(c).lerp(new THREE.Color(0xffffff), 0.32);
      tr.roofMat.color.copy(c).lerp(new THREE.Color(0x1a1f2b), 0.3);
      tr.bodyMat.emissive.copy(c);
    });
    const dark = theme.value === "dark";
    glassMat.color.set(dark ? 0x0b1220 : 0x1d2635);
    trimMat.color.set(0xf3f5f8);
    undercarMat.color.set(dark ? 0x05070c : 0x2a3140);
    stationMat.color.copy(cssColor("--surface"));
    ringMat.color.copy(cssColor("--foreground"));
    riverMat.color.copy(cssColor("--surface-2"));
    (ground.material as THREE.ShadowMaterial).opacity = dark ? 0.35 : 0.14;
    hemi.intensity = dark ? 1.1 : 1.6;
    sun.intensity = dark ? 1.6 : 2.2;
  };
  applyColors();

  /* Sizing - fit ~15 map units across whatever aspect the canvas has */
  let RADIUS = 17;
  const labelW: number[] = []; // cached label widths, cleared on resize
  // On phones crop the far ends a little so stations stay readable.
  const fitRadius = () => {
    const half = el.clientWidth < 640 ? 6.1 : 6.3;
    return Math.max(12, half / (Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect));
  };
  const resize = () => {
    const w = el.clientWidth;
    const h = el.clientHeight;
    if (!w || !h) return;
    renderer!.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    RADIUS = fitRadius();
    labelW.length = 0;
  };
  resize();
  ro = new ResizeObserver(resize);
  ro.observe(el);

  /* Pointer: parallax + station picking */
  const pointer = new THREE.Vector2(0, 0);
  const target = new THREE.Vector2(0, 0);
  const ndc = new THREE.Vector2(-10, -10);
  const raycaster = new THREE.Raycaster();
  const hits = stationObjs.map((s) => s.hit);
  const onMove = (e: PointerEvent) => {
    const r = el.getBoundingClientRect();
    ndc.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    ndc.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    target.set(ndc.x, ndc.y);
  };
  const onLeave = () => {
    ndc.set(-10, -10);
    target.set(0, 0);
  };
  const onClick = () => {
    if (hovered.value) emit("select", hovered.value);
  };
  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);
  el.addEventListener("click", onClick);

  /* Visibility: stop rendering off-screen or in a background tab */
  io = new IntersectionObserver(([e]) => (inView = e.isIntersecting), { threshold: 0 });
  io.observe(el);

  /* Camera rig: from straight above (the flat scheme) into perspective */
  const polarEnd = () => (el.clientWidth < 640 ? 0.55 : 0.52);
  const tmp = new THREE.Vector3();
  const FORWARD = new THREE.Vector3(0, 0, 1);
  const clock = new THREE.Clock();
  let introT = reduce ? 10 : 0;
  let readySent = false;

  const placeCamera = (polar: number, azimuth: number) => {
    camera.position.set(
      RADIUS * Math.sin(polar) * Math.sin(azimuth),
      RADIUS * Math.cos(polar),
      RADIUS * Math.sin(polar) * Math.cos(azimuth)
    );
    camera.lookAt(0, 0, 0.3);
  };

  const frame = () => {
    raf = requestAnimationFrame(frame);
    if (!inView || document.hidden) {
      clock.getDelta();
      return;
    }
    const dt = Math.min(clock.getDelta(), 0.25);
    introT += dt;

    // intro: tilt up from the flat map
    const tilt = easeOutExpo(Math.min(1, Math.max(0, (introT - 0.15) / 1.8)));
    pointer.lerp(target, reduce ? 1 : 0.06);
    const polar = 0.02 + (polarEnd() - 0.02) * tilt - pointer.y * 0.08;
    const azimuth = pointer.x * 0.22 + (reduce ? 0 : Math.sin(introT * 0.15) * 0.05);
    placeCamera(polar, azimuth);

    // lines grow
    lineObjs.forEach((lo) => {
      const p = easeOutExpo(Math.min(1, Math.max(0, (introT - lo.delay) / 1.5)));
      const count = Math.floor((lo.total * p) / 6) * 6;
      lo.mesh.geometry.setDrawRange(0, count);
    });

    // stations pop
    stationObjs.forEach((so) => {
      const p = Math.min(1, Math.max(0, (introT - so.delay) / 0.6));
      const base = p <= 0 ? 0.0001 : easeOutBack(p);
      const hover = hovered.value === so.slug ? 1.35 : 1;
      const cur = so.group.scale.x;
      const goal = Math.max(0.0001, base * hover);
      so.group.scale.setScalar(p < 1 ? goal : cur + (goal - cur) * 0.2);
    });

    // trains
    const trainsOn = introT > 2.0;
    trains.forEach((tr) => {
      tr.cars.forEach((c) => (c.visible = trainsOn));
      if (!trainsOn) return;
      const lo = 0.015 + tr.step;
      const hi = 0.985 - tr.step;
      if (!reduce) {
        tr.t += tr.dir * tr.speed * dt;
        if (tr.t > hi) { tr.t = hi; tr.dir = -1; }
        if (tr.t < lo) { tr.t = lo; tr.dir = 1; }
      }
      // headlights lead, red tail lights trail; swap when the set reverses
      if (tr.dir !== tr.lastDir) {
        tr.lastDir = tr.dir;
        tr.lampsFront.forEach((l) => (l.material = tr.dir > 0 ? headMat : tailMat));
        tr.lampsBack.forEach((l) => (l.material = tr.dir > 0 ? tailMat : headMat));
      }
      tr.cars.forEach((car, idx) => {
        const u = tr.t + (idx - 1) * tr.step;
        tr.line.curve.getPointAt(u, car.position);
        car.position.y = RIDE_Y;
        tr.line.curve.getTangentAt(u, tmp);
        tmp.y = 0;
        tmp.normalize();
        car.quaternion.setFromUnitVectors(FORWARD, tmp);
      });
    });

    // picking
    if (introT > 1.2) {
      raycaster.setFromCamera(ndc, camera);
      const hit = raycaster.intersectObjects(hits, false)[0];
      const slug = hit ? (hit.object.userData.slug as string) : null;
      if (slug !== hovered.value) {
        hovered.value = slug;
        el.style.cursor = slug ? "pointer" : "";
      }
    }

    // HTML labels follow their stations
    const w = el.clientWidth;
    const h = el.clientHeight;
    stationObjs.forEach((so, i) => {
      const node = labelEls.value[i];
      if (!node) return;
      tmp.copy(so.top).project(camera);
      // keep labels inside the page gutter even where the lines run off the canvas
      if (!labelW[i]) labelW[i] = node.offsetWidth;
      const pad = (w < 640 ? 20 : 6) + labelW[i] / 2;
      const x = Math.min(w - pad, Math.max(pad, (tmp.x * 0.5 + 0.5) * w));
      const y = (-tmp.y * 0.5 + 0.5) * h;
      node.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -100%)`;
      node.style.opacity = introT > so.delay + 0.3 && tmp.z < 1 ? "1" : "0";
    });

    renderer!.render(scene, camera);

    if (!readySent) {
      readySent = true;
      emit("ready");
    }
  };
  frame();

  disposeAll = () => {
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerleave", onLeave);
    el.removeEventListener("click", onClick);
    scene.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else mat?.dispose();
    });
    renderer?.dispose();
  };
});

watch(theme, () => requestAnimationFrame(() => applyColors?.()));

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  io?.disconnect();
  ro?.disconnect();
  disposeAll?.();
  renderer = null;
});
</script>

<template>
  <div ref="host" class="relative h-full w-full touch-pan-y select-none">
    <canvas ref="canvasEl" class="block h-full w-full" />
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <span
        v-for="lb in labels"
        :key="lb.slug"
        ref="labelEls"
        class="absolute left-0 top-0 whitespace-nowrap rounded-full border px-1.5 py-0.5 font-display text-[10px] font-semibold sm:px-2.5 sm:py-1 sm:text-xs transition-[opacity,background-color,color,border-color] duration-300"
        :class="hovered === lb.slug
          ? 'border-foreground bg-foreground text-background'
          : 'border-border bg-surface/90 text-foreground'"
        style="opacity: 0"
      >{{ lb.label }}</span>
    </div>
  </div>
</template>
