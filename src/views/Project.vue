<template>
  <div v-if="project">
    <ProjectHeader :project="project" />

    <div class="project-wrapper container py-5">
      <div class="row">
        <section class="col-12 col-lg-8">
          <router-view :project="project" :testimonials="testimonials" />
        </section>
        <ProjectInfo class="col-12 col-lg-4 ps-lg-5" :project="project" />
      </div>

      <OtherProjectCaseStudies :projects="otherProjects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  OtherProjectCaseStudies,
  ProjectHeader,
  ProjectInfo,
} from "@/components";
import { useDB } from "@/composables";
import type { IProject } from "@/types";
import { computed, onBeforeMount, onBeforeUpdate, ref } from "vue";
import { useRoute } from "vue-router";

const { projects, testimonials: testimonialsDB } = useDB();
const project = ref<IProject>();

const loadProjectData = () => {
  const route = useRoute();
  project.value = projects.find((p) => `project-${p.slug}` == route.name);
};

onBeforeMount(loadProjectData);
onBeforeUpdate(loadProjectData);

const otherProjects = computed(() => {
  return projects.filter((p) => p.slug != project.value?.slug);
});

const testimonials = computed(() => {
  return testimonialsDB.filter((p) =>
    p.relevantForProjects.includes(project.value?.slug || "")
  );
});
</script>

<style lang="scss">
.project-wrapper {
  p {
    margin-bottom: 1.5rem;
  }
  .section-row {
    margin-bottom: 4rem;
  }
}
</style>
