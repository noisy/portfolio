<template>
  <PageHeader title="Projects"
    >In-depth Case Studies to show you what I can offer and how I
    work</PageHeader
  >
  <section class="section pt-5">
    <div class="container">
      <Filters :filters="projectFilters" />
      <ProjectsGrid :projects="projects" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Filters, PageHeader, ProjectsGrid } from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "Projects",
  components: {
    Filters,
    PageHeader,
    ProjectsGrid,
  },
  setup() {
    const { projects, projectFilters } = useDB();
    return { projects, projectFilters };
  },
});
</script>
