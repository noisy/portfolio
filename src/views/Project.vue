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
import {
  OtherProjectCaseStudies,
  ProjectHeader,
  ProjectInfo,
} from "@/components";
import { useDB } from "@/composables";
import type { IProject } from "@/types";
import {
  computed,
  defineComponent,
  onBeforeMount,
  onBeforeUpdate,
  ref,
} from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Project",
  components: {
    ProjectHeader,
    ProjectInfo,
    OtherProjectCaseStudies,
  },
  setup() {
    const { projects, testimonials } = useDB();
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

    const projectTestimonials = computed(() => {
      return testimonials.filter((p) =>
        p.relevantForProjects.includes(project.value?.slug || "")
      );
    });

    return {
      project,
      otherProjects,
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
