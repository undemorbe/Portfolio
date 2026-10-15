<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/sections/Hero.vue";
import About from "@/components/sections/About.vue";
import Projects from "@/components/sections/Projects.vue";
import Experience from "@/components/sections/Experience.vue";
import Skills from "@/components/sections/Skills.vue";
import Philosophy from "@/components/sections/Philosophy.vue";
import Process from "@/components/sections/Process.vue";
import Services from "@/components/sections/Services.vue";
import WhyMe from "@/components/sections/WhyMe.vue";
import GithubSection from "@/components/sections/Github.vue";
import Contact from "@/components/sections/Contact.vue";

onMounted(() => {
  document.title = "Boris Stankov — Flutter Developer";
});
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Philosophy />
    <Process />
    <Services />
    <WhyMe />
    <GithubSection />
    <Contact />
  </main>
  <Footer />
</template>
