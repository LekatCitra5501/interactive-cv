<template>
  <section id="kontak" class="relative py-24 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
    <div class="absolute inset-0 opacity-10 animate-wave-bg" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M 0 0 Q 50 100 100 0 L 100 100 L 0 100 Z%22 fill=%22%23A855F7%22 opacity=%220.05%22/%3E%3C/svg%3E'); background-size: 200px;"></div>

    <div class="container mx-auto px-6 z-10 relative">
      <SectionTitle title="Hubungi Saya" class="text-white" />
      <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed drop-shadow-md text-center">Tertarik untuk bekerja sama atau sekadar ingin menyapa? Klik tombol di bawah untuk mengirim email langsung.</p>

      <div class="max-w-xl mx-auto bg-dark-card bg-opacity-80 p-8 rounded-xl shadow-2xl animate-fade-in-up border border-gray-700 text-center">
        <button @click="openGmail" class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white text-xl py-4 rounded-full transition duration-300 shadow-lg transform hover:-translate-y-1">
          Kirim Email ke Gmail
        </button>
      </div>

      <div class="flex justify-center space-x-8 mt-12 text-4xl">
        <a href="https://github.com/LekatCitra5501" target="_blank" class="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110" title="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://www.instagram.com/lekatafitriantii/" target="_blank" class="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110" title="Instagram"><i class="fab fa-instagram"></i></a>
      </div>
      <p class="text-gray-500 text-sm mt-4 text-center">
        © {{ new Date().getFullYear() }} Lekat Citra Fitrianti. All Rights Reserved.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SectionTitle from './SectionTitle.vue';

const bgImage = ref('https://images.unsplash.com/photo-1582236166453-61b6e41b9d10?q=80&w=1920&h=1080&fit=crop&crop=entropy&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

const openGmail = () => {
  const subject = encodeURIComponent('Kontak dari Portofolio Lekat Citra Fitrianti');
  const body = encodeURIComponent('Halo Lekat,\n\nSaya ingin mengobrol tentang [masukkan topik]. Silakan balas email ini.\n\nTerima kasih!\n[Nama Anda]');
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=lekatcitrafitrianti@gmail.com&su=${subject}&body=${body}`;
  window.open(mailtoLink, '_blank');
};

const parallaxEffect = () => {
  const scrolled = window.scrollY;
  const section = document.getElementById('kontak');
  const parallaxBg = section ? section.querySelector('.parallax-bg') : null;
  if (parallaxBg) {
    const sectionTop = section.offsetTop;
    const yOffset = (scrolled - sectionTop) * 0.3;
    parallaxBg.style.transform = `translateY(${yOffset}px)`;
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
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes wave-bg {
  0% { background-position: 0 0; }
  100% { background-position: 200px 200px; }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-wave-bg {
  animation: wave-bg 25s linear infinite;
}
</style>
