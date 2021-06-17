<template>
  <PageHeader :title="project.name">{{ project.summary }}</PageHeader>

  <div class="project-wrapper container py-5">
    <div class="row">
      <ProjectInfo class="col-12 col-lg-4 ps-lg-5" :project="project" />
      <section class="col-12 col-lg-8">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { PageHeader, ProjectInfo } from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "Project",
  components: {
    PageHeader,
    ProjectInfo,
  },
  setup() {
    const { projects } = useDB();
    const route = useRoute();
    debugger;
    return {
      project: projects.find((p) => `project-${p.slug}` == route.name),
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
