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

<script setup lang="ts">
import { Filters, PageHeader, ProjectsGrid } from "@/components";
import { useProjects } from "@/composables";
import { setupIsotopeFilters } from "@/libs/isotope-custom";
import { onMounted } from "vue";

const { projects, projectFilters } = useProjects();

onMounted(() => setupIsotopeFilters(["project-filters"]));
</script>
