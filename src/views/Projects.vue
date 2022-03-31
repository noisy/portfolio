<template>
  <PageHeader title="Projects"
    >In-depth Case Studies to show you what I can offer and how I
    work</PageHeader
  >
  <section class="section pt-5">
    <div class="container">
      <Filters name="project-filters" :filters="projectFilters" />
      <ProjectsGrid :projects="projects" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { Filters, PageHeader, ProjectsGrid } from "@/components";
import { useDB } from "@/composables";
import { setupIsotopeFilters } from "@/libs/isotope-custom";

export default defineComponent({
  name: "Projects",
  components: {
    Filters,
    PageHeader,
    ProjectsGrid,
  },
  setup() {
    const { projects, projectFilters } = useDB();
    onMounted(() => setupIsotopeFilters(["project-filters"]));
    return { projects, projectFilters };
  },
});
</script>
