<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/sections/Hero.vue";
import About from "@/components/sections/About.vue";
import Projects from "@/components/sections/Projects.vue";
import Experience from "@/components/sections/Experience.vue";
import Approach from "@/components/sections/Approach.vue";
import WhyMe from "@/components/sections/WhyMe.vue";
import GithubSection from "@/components/sections/Github.vue";
import Contact from "@/components/sections/Contact.vue";

onMounted(() => {
  document.title = "Борис Станьков - Flutter-разработчик";
});
</script>

<template>
  <Navbar />
  <main id="main">
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Approach />
    <WhyMe />
    <GithubSection />
    <Contact />
  </main>
  <Footer />
</template>
