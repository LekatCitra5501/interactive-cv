<template>
  <section id="profil" class="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-b from-gray-900 to-black py-24">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900/70 to-black/90 z-0 opacity-80"></div>
    <div class="absolute inset-0 bg-cover bg-center parallax-bg z-0" :style="{ backgroundImage: `url('${bgImage}')` }"></div>
    <div class="absolute inset-0 z-10 opacity-15 animate-wave-bg" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22%2314B8A6%22 opacity=%220.1%22/%3E%3C/svg%3E'); background-size: 200px;"></div>

    <div class="container mx-auto px-6 z-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div class="md:w-1/2 mb-12 md:mb-0 animate-slide-in-left text-start" style="animation-delay: 200ms;">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
          Halo, Saya <br>
          <span class="relative inline-block">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 animate-gradient-shift">Lekat Citra Fitrianti</span>
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600 animate-underline-grow"></span>
          </span>
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed drop-shadow-md max-w-lg">
          Seorang <span class="font-semibold text-white">Fullstack Developer</span> yang berdedikasi membangun solusi digital inovatif dengan fokus pada performa dan pengalaman pengguna.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-start">
          <a href="#kontak" class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Hubungi Saya
          </a>
          <a href="#proyek" class="border-2 border-blue-400 text-blue-400 font-semibold py-3 px-8 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            Lihat Proyek
          </a>
        </div>
        <div class="flex gap-6 mt-6 justify-start">
          <a href="https://github.com" target="_blank" class="text-gray-300 hover:text-blue-400 transition-colors duration-300">
            <i class="fab fa-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="text-gray-300 hover:text-blue-400 transition-colors duration-300">
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center animate-slide-in-right" style="animation-delay: 400ms;">
        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <img src="@/assets/profile.jpeg" alt="Foto Lekat Citra Fitrianti" class="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full object-cover shadow-2xl border-4 border-blue-500/50 transform group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const bgImage = ref('https://images.unsplash.com/photo-1620121478247-ec786b1c74be?q=80&w=1920&h=1080&fit=crop&crop=entropy&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); // Updated abstract coding background

const parallaxEffect = () => {
  const scrolled = window.scrollY;
  const section = document.getElementById('profil');
  const parallaxBg = section ? section.querySelector('.parallax-bg') : null;
  if (parallaxBg) {
    const sectionTop = section.offsetTop;
    parallaxBg.style.transform = `translateY(${(scrolled - sectionTop) * 0.2}px)`; // Reduced intensity
  }
};

onMounted(() => {
  window.addEventListener('scroll', parallaxEffect);
});

onUnmounted(() => {
  window.removeEventListener('scroll', parallaxEffect);
});
</script>

<style scoped>
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes underline-grow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

@keyframes slide-in-left {
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-right {
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-gradient-shift {
  background-size: 200% 100%;
  animation: gradient-shift 5s ease infinite;
}

.animate-underline-grow {
  transform-origin: left;
  animation: underline-grow 1s ease-out forwards;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>
