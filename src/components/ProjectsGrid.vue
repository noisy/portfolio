<template>
  <div class="container">
    <div class="project-cards row mb-5 isotope">
      <ProjectThumbnail
        v-for="project in projects"
        :key="project.slug"
        class="isotope-item"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProject } from "@/types";
import ProjectThumbnail from "./ProjectThumbnail.vue";

defineProps<{ projects: IProject[] }>();
</script>
<style lang="scss" scoped>
@keyframes hide-item {
  0% {
    opacity: 1;
    max-height: auto;
    margin-bottom: 50px;
  }
  100% {
    opacity: 0;
    scale: 0;
    max-height: 0;
    margin: 0;
    overflow: hidden;
  }
}

@keyframes show-item {
  0% {
    opacity: 0;
    max-height: 0;
    margin: 0;
    scale: 0;
    overflow: hidden;
  }
  100% {
    opacity: 1;
    max-height: auto;
    margin-bottom: 50px;
  }
}

.item {
  margin-bottom: 50px;
  transition: opacity 0.5s ease-in-out;
  animation: show-item 0.5s ease-in-out forwards;
}

.item.hidden {
  animation: hide-item 0.5s ease-in-out forwards;
}
</style>
