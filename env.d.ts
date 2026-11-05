/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Yandex Metrica counter number; analytics stay off without it */
  readonly VITE_YM_ID?: string;
  /** "true" turns on Webvisor session recording */
  readonly VITE_YM_WEBVISOR?: string;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}
