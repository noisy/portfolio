<template>
  <div v-if="project">
    <ProjectHeader :project="project" />

    <div class="project-wrapper container py-5">
      <div class="row">
        <CoverImage class="col-12 col-lg-8" :url="`@/images/projects/${project.thumbnail}`" />
        <ProjectInfo class="col-12 col-lg-4 ps-lg-5" :project="project" />
        <section class="col-12 col-lg-8">
          <router-view :project="project" :testimonials="testimonials" />
        </section>

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
  CoverImage,
} from "@/components";
import { useDB } from "@/composables";
import { computed } from "vue";
import { useRoute } from "vue-router";

const { projects, testimonials: testimonialsDB } = useDB();

const project = computed(() =>
  projects.find((p) => `project-${p.slug}` == useRoute().name)
);

const otherProjects = computed(() =>
  projects.filter((p) => p.slug != project.value?.slug)
);

const testimonials = computed(() =>
  testimonialsDB.filter((p) =>
    p.relevantForProjects.includes(project.value?.slug || "")
  )
);
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
