<template>
  <section class="section-featured-projects py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-5">
        Featured Projects
      </h3>
      <ProjectsGrid :projects="projects" />
      <div class="text-center">
        <router-link class="btn btn-primary" :to="{ name: 'projects' }">
          View all projects
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFeaturedProjects } from "@/composables";
import ProjectsGrid from "./ProjectsGrid.vue";

const { projects } = useFeaturedProjects();
</script>
