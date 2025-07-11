<template>
  <header :class="['fixed w-full z-50 transition-all duration-300 py-4', {'bg-dark-bg shadow-xl bg-opacity-90 backdrop-blur-sm': scrolled, 'bg-transparent': !scrolled}]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <router-link to="/" class="text-1xl md:text-4xl font-bold text-white hover:text-accent-3 transition-colors duration-300 flex items-center group">
        <span class="font-display">Lekat Citra Fitrianti</span>
      </router-link>

      <div class="flex items-center space-x-6">
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

        <button @click="toggleMobileMenu"
                class="md:hidden w-10 h-10 flex items-center justify-center rounded-md bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-3 z-10 relative">
          <div class="hamburger-icon" :class="{ 'open': isMobileMenuOpen }">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </button>
      </div>
    </div>

    <Transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 bg-dark-bg bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 z-40">
        <ul class="flex flex-col items-center space-y-8">
          <li v-for="link in navLinks" :key="link.id">
            <a @click="scrollToSectionAndCloseMenu(link.href.substring(1))"
               class="text-white hover:text-accent-3 font-semibold transition-colors duration-300 text-3xl py-2 px-4 block">
              {{ link.text }}
            </a>
          </li>
        </ul>
        <button @click="closeMobileMenu" class="absolute top-6 right-6 text-white text-4xl focus:outline-none hover:text-accent-3">
          &times;
        </button>
      </div>
    </Transition>
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

const isMobileMenuOpen = ref(false); // State untuk hamburger menu

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

const scrollToSectionAndCloseMenu = (id) => {
  scrollToSection(id);
  closeMobileMenu(); // Tutup menu setelah klik
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Nonaktifkan/aktifkan scroll body saat menu mobile terbuka
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = ''; // Aktifkan kembali scroll body
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

/* Custom Hamburger Icon Styles */
.hamburger-icon {
  width: 28px; /* Ukuran sedikit lebih besar */
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}

.bar {
  width: 100%;
  height: 3px;
  background-color: #f3f4f6; /* Warna bar default (light gray) */
  border-radius: 5px;
  transition: all 0.3s ease;
}

/* Animasi untuk mengubah menjadi 'X' */
.hamburger-icon.open .bar:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg); /* Sesuaikan translateY */
}

.hamburger-icon.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open .bar:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg); /* Sesuaikan translateY */
}

/* Transisi untuk mobile menu overlay (ini penting) */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.4s ease-out; /* Durasi lebih lama, easing lebih smooth */
}

.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-100%); /* Masuk/keluar dari atas */
}

/* Animasi untuk fadeInDown (jika masih diperlukan) */
/* Pastikan ini diatur di App.vue atau global CSS jika mempengaruhi seluruh body */
/* .animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out;
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
} */
</style>
