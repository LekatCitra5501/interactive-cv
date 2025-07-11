<template>
  <header :class="['fixed w-full z-50 transition-all duration-300 py-4', {'bg-dark-bg shadow-xl bg-opacity-90 backdrop-blur-sm': scrolled, 'bg-transparent': !scrolled}]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <router-link to="/" class="text-1xl md:text-4xl font-extrabold text-white hover:text-accent-3 transition-colors duration-300 flex items-center group">
        <span class="font-display">Lekat Citra Fitrianti</span>
      </router-link>

      <nav class="hidden md:block">
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

      <div class="md:hidden flex items-center">
        <button @click="toggleMobileNav" class="text-white focus:outline-none">
          <div :class="['w-6 h-0.5 bg-white transition-all duration-300', {'rotate-45 translate-y-1.5': mobileNavOpen}]"></div>
          <div :class="['w-6 h-0.5 bg-white transition-all duration-300 mt-1', {'opacity-0': mobileNavOpen}]"></div>
          <div :class="['w-6 h-0.5 bg-white transition-all duration-300 mt-1', {'-rotate-45 -translate-y-1.5': mobileNavOpen}]"></div>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="-translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-300 transform"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-full opacity-0"
    >
      <nav v-if="mobileNavOpen" class="md:hidden bg-dark-bg bg-opacity-95 backdrop-blur-sm px-6 py-4 absolute top-full left-0 w-full shadow-lg">
        <ul class="flex flex-col space-y-4">
          <li v-for="link in navLinks" :key="link.id">
            <a @click.prevent="scrollToSectionAndClose(link.href.substring(1))" class="block text-light-text hover:text-accent-3 font-semibold text-lg py-2 cursor-pointer border-b border-gray-700 last:border-b-0">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const scrolled = ref(false);
const mobileNavOpen = ref(false); // New state for mobile navigation
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

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value;
  // Prevent scrolling when mobile nav is open
  if (mobileNavOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const scrollToSection = (id) => {
  router.push({ path: '/', hash: `#${id}` }).then(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
};

// New function to scroll and then close mobile nav
const scrollToSectionAndClose = (id) => {
  scrollToSection(id);
  mobileNavOpen.value = false;
  document.body.style.overflow = ''; // Restore scrolling
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Close mobile nav if window is resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint in Tailwind
      mobileNavOpen.value = false;
      document.body.style.overflow = '';
    }
  });

  if (route.hash) {
    scrollToSection(route.hash.substring(1));
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', () => {}); // Clean up resize listener
  document.body.style.overflow = ''; // Ensure scrolling is restored
});
</script>

<style scoped>
/*
  TailwindCSS utility classes are used for responsiveness and styling.
  The hamburger icon animation and mobile menu transitions are handled by:
  - `transition-all duration-300` on the individual div elements for the hamburger lines.
  - Conditional classes like `rotate-45`, `translate-y-1.5`, `opacity-0` for the animation.
  - Vue's `<transition>` component for the mobile navigation menu entrance/exit.
*/
</style>
