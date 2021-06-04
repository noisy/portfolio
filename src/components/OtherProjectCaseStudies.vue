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

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsGrid from "./ProjectsGrid.vue";

export default defineComponent({
  name: "OtherProjectCaseStudies",
  props: ["projects"],
  components: { ProjectsGrid },
});
</script>
