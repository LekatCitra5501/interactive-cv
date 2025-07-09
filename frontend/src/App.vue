<script setup>
import AppHeader from './components/Navbar.vue';
import ProfileSection from './components/Hero.vue';
import EducationSection from './components/Education.vue';
import SkillsSection from './components/Skills.vue';
import ProjectsSection from './components/Projects.vue';
import ContactSection from './components/Contact.vue';
</script>

<template>
  <div id="app" class="relative bg-dark-bg">
    <AppHeader />
    <main>
      <ProfileSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<style>
/* Global styles from src/assets/main.css will apply */
</style>
