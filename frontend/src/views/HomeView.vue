<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Education from '@/components/Education.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
</script>
<template>
  <div class="transition-all duration-1000">
    <Navbar />
    <main>
      <Hero />
      <div v-animate-on-scroll class="transition-all duration-1000 transform hover:scale-102">
        <Education />
      </div>
      <div v-animate-on-scroll class="transition-all duration-1000 transform hover:scale-102">
        <Skills />
      </div>
      <div v-animate-on-scroll class="transition-all duration-1000 transform hover:scale-102">
        <Projects />
      </div>
      <div v-animate-on-scroll class="transition-all duration-1000 transform hover:scale-102">
        <Contact />
      </div>
      <div class="fixed bottom-6 right-6">
        <button @click="scrollToTop" class="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
          ↑
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.v-animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.v-animate-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>