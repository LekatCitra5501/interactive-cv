<template>
  <section id="skill" class="relative py-24 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
    <div class="absolute inset-0 opacity-10 animate-wave-bg" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M 0 0 Q 50 100 100 0 L 100 100 L 0 100 Z%22 fill=%22%23A855F7%22 opacity=%220.05%22/%3E%3C/svg%3E'); background-size: 200px;"></div>

    <div class="container mx-auto px-6 z-10 relative">
      <SectionTitle title="Keahlian & Teknologi" class="text-white" />
      <div v-if="error" class="text-red-500 text-center mb-4 text-lg bg-red-900/50 p-2 rounded">{{ error }}</div>
      <div v-else-if="loading" class="text-gray-300 text-center text-lg animate-pulse">Memuat keahlian...</div>
      <div v-else-if="skills.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        <div v-for="skill in skills" :key="skill.name" class="bg-dark-card p-6 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-700 animate-fade-in" :style="{ 'animation-delay': `${skills.indexOf(skill) * 0.1}s` }">
          <div class="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-800 rounded-full overflow-hidden transition-all duration-300 group-hover:bg-gradient-to-br from-purple-500 to-pink-500 group-hover:shadow-lg">
            <img :src="skill.logo" :alt="skill.name + ' Icon'" class="w-12 h-12 object-contain transition-transform duration-300 group-hover:rotate-12" />
            <div class="absolute -inset-1 bg-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{{ skill.name }}</h3>
          <div class="w-32 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div :style="{ width: skill.level === 'Mahir' ? '90%' : skill.level === 'Menengah' ? '70%' : '50%', background: 'linear-gradient(to right, #9333EA, #C026D3)' }" class="h-full rounded-full transition-all duration-500"></div>
          </div>
          <p class="text-gray-400 mt-2 text-base font-medium flex items-center justify-center gap-1">
            {{ skill.level }}
            <span class="text-purple-400 animate-pulse">★</span>
            <span class="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">{{ (skill.level === 'Mahir' ? 90 : skill.level === 'Menengah' ? 70 : 50) }}%</span>
          </p>
          <div class="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"></div>
        </div>
      </div>
      <div v-else class="text-gray-400 text-center mt-8 text-lg bg-gray-800/50 p-4 rounded">Tidak ada data keahlian yang tersedia.</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('/api/skills')
    skills.value = response.data
  } catch (err) {
    console.error('Error fetching skills:', err);
    error.value = 'Gagal memuat data keahlian. Silakan coba lagi nanti.';
  } finally {
    loading.value = false;
  }
})
</script>

<style scoped>
@keyframes fade-in {
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes wave-bg {
  0% { background-position: 0 0; }
  100% { background-position: 200px 200px; }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-wave-bg {
  animation: wave-bg 25s linear infinite;
}

.animate-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
</style>
