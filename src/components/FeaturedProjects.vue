<template>
  <section class="section-featured-projects py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-5">
        Featured Projects
      </h3>
      <ProjectsGrid :projects="projects"></ProjectsGrid>
      <div class="text-center">
        <router-link class="btn btn-primary" :to="{ name: 'projects' }"
          >View all projects</router-link
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsGrid from "./ProjectsGrid.vue";
import { useFeaturedProjects } from "@/composables";

export default defineComponent({
  name: "FeaturedProjects",
  components: { ProjectsGrid },
  setup() {
    const { projects } = useFeaturedProjects();
    return { projects };
  },
});
</script>
