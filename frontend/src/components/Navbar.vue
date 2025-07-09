<template>
  <header :class="['fixed w-full z-50 transition-all duration-300 py-4', {'bg-dark-bg shadow-xl bg-opacity-90 backdrop-blur-sm': scrolled, 'bg-transparent': !scrolled}]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <router-link to="/" class="text-3xl md:text-4xl font-extrabold text-white hover:text-accent-3 transition-colors duration-300 flex items-center group">
        <span class="font-display">Lekat Citra Fitrianti</span>
      </router-link>
      <nav>
        <ul class="flex space-x-8 lg:space-x-12">
          <li v-for="link in navLinks" :key="link.id" class="relative group">
            <a @click.prevent="scrollToSection(link.href.substring(1))" class="text-light-text hover:text-accent-3 font-semibold transition-all duration-300 flex items-center text-lg py-2 cursor-pointer relative z-10">
              {{ link.text }}
              <span class="ml-1 text-sm text-accent-3 transition-transform duration-300 group-hover:rotate-[360deg]">✦</span>
            </a>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-3 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const scrolled = ref(false);
const route = useRoute();
const router = useRouter();

const navLinks = ref([
  { id: 1, href: '#profil', text: 'Profil' },
  { id: 2, href: '#pendidikan', text: 'Pendidikan' },
  { id: 3, href: '#skill', text: 'Skill' },
  { id: 4, href: '#proyek', text: 'Proyek' },
  { id: 5, href: '#kontak', text: 'Kontak' },
]);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const scrollToSection = (id) => {
  router.push({ path: '/', hash: `#${id}` }).then(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  if (route.hash) {
    scrollToSection(route.hash.substring(1));
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Scoped styles are mostly handled by Tailwind classes */
</style>
