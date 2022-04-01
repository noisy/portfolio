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

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUpdate, ref } from "vue";
import { useRoute } from "vue-router";
import {
  OtherProjectCaseStudies,
  ProjectHeader,
  ProjectInfo,
} from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "Project",
  components: {
    ProjectHeader,
    ProjectInfo,
    OtherProjectCaseStudies,
  },
  setup() {
    const { projects, testimonials } = useDB();
    let project = ref();
    let projectTestimonials = ref();

    const loadProjectData = () => {
      const route = useRoute();
      project.value = projects.find((p) => `project-${p.slug}` == route.name);

      projectTestimonials.value = testimonials.filter((p) =>
        p.relevantForProjects.includes(project.value.slug)
      );
    };
    onBeforeMount(loadProjectData);
    onBeforeUpdate(loadProjectData);

    return {
      project,
      otherProjects: projects,
      testimonials: projectTestimonials,
    };
  },
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
