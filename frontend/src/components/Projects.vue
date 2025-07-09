<template>
  <section id="proyek" class="relative min-h-screen py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
    <div class="absolute inset-0 opacity-10 animate-wave-bg" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpolygon points=%220,0 100,0 50,100%22 fill=%22%2314B8A6%22 opacity=%220.05%22/%3E%3C/svg%3E'); background-size: 150px;"></div>

    <div class="container mx-auto px-6 z-10 relative">
      <SectionTitle
        title="Proyek Unggulan"
        class="text-white mb-16 text-center"
        subtitle="Karya terbaik saya yang menunjukkan keahlian dan kreativitas."
      />

      <div v-if="error" class="text-red-500 text-center mb-8 text-xl bg-red-900/50 p-4 rounded-lg">
        {{ error }}
      </div>
      <div v-else-if="loading" class="text-gray-400 text-center text-xl animate-pulse">
        Memuat proyek...
      </div>
      <div v-else-if="projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div v-for="project in projects" :key="project.title" class="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.03] transition duration-300 text-left border border-gray-600 group animate-scale-in">
          <div class="relative overflow-hidden">
            <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110 cursor-pointer" @click="openModal(project.image)">
            <div class="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button @click="openModal(project.image)" class="text-white bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-full text-lg shadow-lg">
                <i class="fas fa-search-plus mr-2"></i>Lihat Gambar
              </button>
            </div>
          </div>
          <div class="p-6 flex flex-col h-full">
            <h3 class="text-2xl font-bold mb-3 text-blue-400">{{ project.title }}</h3>
            <p class="text-base mb-4 text-gray-300 flex-grow">{{ project.description }}</p>
            <p class="text-sm text-gray-400 mb-6 mt-auto">Stack: <span class="font-medium text-white">{{ project.tech.join(', ') }}</span></p>
            <div class="flex space-x-4">
              <a v-if="project.link && project.link !== '#'" :href="project.link" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-base transition duration-300 shadow-md">
                <i class="fas fa-link mr-2"></i>Demo
              </a>
              <a v-if="project.githubLink && project.githubLink !== '#'" :href="project.githubLink" target="_blank" class="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-5 py-2 rounded-full text-base transition duration-300">
                <i class="fab fa-github mr-2"></i>Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-gray-400 text-center mt-12 text-xl bg-gray-900/50 p-6 rounded-lg">
        Tidak ada proyek untuk ditampilkan.
      </div>
    </div>

    <ImageModal :is-visible="isModalVisible" :image-url="currentModalImage" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ImageModal from './ImageModal.vue';

const projects = ref([
  {
    title: 'Website Toko Online',
    image: '/images/masha.jpg',
    description: 'Platform e-commerce dengan fitur keranjang belanja dan pembayaran online.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: '#',
    githubLink: '#',
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    image: '/images/upin.jpg',
    description: 'Aplikasi untuk mengelola tugas harian dengan fitur notifikasi.',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    link: '#',
    githubLink: '#',
  },
  {
    title: 'Portofolio Pribadi',
    image: '/images/shaun.jpg',
    description: 'Website portofolio untuk menampilkan proyek dan keahlian.',
    tech: ['Vue.js', 'Tailwind CSS', 'Vite'],
    link: '#',
    githubLink: '#',
  },
]);

const loading = ref(false);
const error = ref(null);

const isModalVisible = ref(false);
const currentModalImage = ref('');

const openModal = (imageUrl) => {
  currentModalImage.value = imageUrl;
  isModalVisible.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalVisible.value = false;
  currentModalImage.value = '';
  document.body.style.overflow = '';
};

onMounted(() => {
  window.addEventListener('scroll', parallaxEffect);
});

onUnmounted(() => {
  window.removeEventListener('scroll', parallaxEffect);
});

const parallaxEffect = () => {
  const scrolled = window.scrollY;
  const section = document.getElementById('proyek');
  const parallaxBg = section ? section.querySelector('.parallax-bg') : null;
  if (parallaxBg) {
    const sectionTop = section.offsetTop;
    const yOffset = (scrolled - sectionTop) * 0.3;
    parallaxBg.style.transform = `translateY(${yOffset}px)`;
  }
};
</script>

<style scoped>
@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes wave-bg {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 150px 150px;
  }
}

.animate-scale-in {
  animation: scale-in 0.6s ease-out forwards;
}

.animate-wave-bg {
  animation: wave-bg 20s linear infinite;
}
</style>
