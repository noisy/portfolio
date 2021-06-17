<template>
  <PageHeader :title="project.name">{{ project.summary }}</PageHeader>

  <div class="project-wrapper container py-5">
    <div class="row">
      <section class="col-12 col-lg-8">
        <router-view></router-view>
      </section>
      <ProjectInfo class="col-12 col-lg-4 ps-lg-5" :project="project" />
    </div>

    <OtherProjectCaseStudies :projects="otherProjects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { OtherProjectCaseStudies, PageHeader, ProjectInfo } from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "Project",
  components: {
    PageHeader,
    ProjectInfo,
    OtherProjectCaseStudies,
  },
  setup() {
    const { projects } = useDB();
    const route = useRoute();
    return {
      project: projects.find((p) => `project-${p.slug}` == route.name),
      otherProjects: projects,
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
