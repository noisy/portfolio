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
