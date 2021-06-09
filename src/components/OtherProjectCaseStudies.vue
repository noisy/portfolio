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
import { PropType, defineComponent } from "vue";
import ProjectsGrid from "./ProjectsGrid.vue";
import { IProject } from "@/types";

export default defineComponent({
  name: "OtherProjectCaseStudies",
  components: { ProjectsGrid },
  props: {
    projects: {
      type: Array as PropType<IProject[]>,
      required: true,
    },
  },
});
</script>
