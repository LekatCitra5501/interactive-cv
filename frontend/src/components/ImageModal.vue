<template>
  <transition name="modal-fade">
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]" @click.self="closeModal">
      <div class="relative bg-white p-4 rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-hidden">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-3xl font-bold leading-none">&times;</button>
        <img :src="imageUrl" alt="Project Full View" class="max-w-full max-h-[85vh] object-contain mx-auto my-auto">
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  imageUrl: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
