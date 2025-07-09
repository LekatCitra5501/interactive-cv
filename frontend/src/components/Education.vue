<template>
  <section id="pendidikan" class="relative py-28 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
    <div class="absolute inset-0 opacity-10 animate-wave-bg" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2220%22 fill=%22%234F46E5%22 opacity=%220.05%22/%3E%3C/svg%3E'); background-size: 200px;"></div>

    <div class="container mx-auto px-6 z-10 relative">
      <SectionTitle
        title="Riwayat Pendidikan"
        class="text-white mb-16 text-center"
        subtitle="Perjalanan pendidikan saya secara kronologis."
      />

      <div v-if="loading" class="text-center text-gray-400 text-xl animate-pulse">
        Memuat data...
      </div>
      <div v-if="error" class="text-red-500 text-center mb-8 text-xl bg-red-900/50 p-4 rounded-lg">
        {{ error }}
      </div>

      <div v-if="!loading && !error && educationHistory.length > 0" class="relative mt-12">
        <div class="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg"></div>

        <div class="flex flex-col md:flex-row items-center justify-between w-full relative z-10 space-y-12 md:space-y-0 md:space-x-8">
          <div
            v-for="(edu, index) in educationHistory"
            :key="edu.id"
            class="flex flex-col items-center w-full md:w-auto bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border border-gray-600 animate-fade-in-up group"
            :style="{ 'animation-delay': `${index * 0.15}s` }"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-500 absolute -top-6 z-20 animate-dot-pulse">
              {{ index + 1 }}
            </div>

            <div class="text-center pt-8">
              <p class="font-semibold text-blue-400 text-lg mb-2">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-white mb-2">{{ edu.institution }}</h3>
              <p class="text-gray-300 text-base">{{ edu.major }}</p>
              <p v-if="edu.description" class="text-gray-400 text-sm mt-3 italic">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="!loading && !error && educationHistory.length === 0" class="text-gray-400 text-center mt-12 text-xl bg-gray-900/50 p-6 rounded-lg">
        Tidak ada data riwayat pendidikan yang tersedia.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (err) {
    console.error('Error fetching education data:', err);
    error.value = 'Gagal memuat data riwayat pendidikan. Silakan coba lagi nanti.';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes dot-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes wave-bg {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200px 200px;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-dot-pulse {
  animation: dot-pulse 2s ease-in-out infinite;
}

.animate-wave-bg {
  animation: wave-bg 25s linear infinite;
}
</style>
