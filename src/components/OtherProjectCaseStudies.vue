<template>
  <section class="section-featured-projects py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-5">
        Other Project Case Studies
      </h3>
      <ProjectsGrid :projects="projects"></ProjectsGrid>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProject } from "@/types";
import ProjectsGrid from "./ProjectsGrid.vue";

defineProps<{ projects: IProject[] }>();
</script>
