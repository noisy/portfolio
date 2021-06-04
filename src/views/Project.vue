<template>
  <PageHeader :title="project.name">{{ project.summary }}</PageHeader>

  <div class="project-wrapper container py-5">
    <div class="row">
      <ProjectInfo class="col-12 col-lg-4 ps-lg-5" :project="project" />
      <section class="col-12 col-lg-8">
        <slot></slot>
      </section>
    </div>
  </div>

  <HireMeFooter />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PageHeader, ProjectInfo, HireMeFooter } from "@/components";
import IProject from "@/types/IProject";

export default defineComponent({
  name: "Project",
  components: {
    PageHeader,
    ProjectInfo,
    HireMeFooter,
  },
  props: {
    project: {
      required: true,
      type: Object as PropType<IProject>,
    },
  },
});
</script>
