import { PageHeader, ProjectInfo, HireMeFooter } from "../../assets/js/app/components/index.js";

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
import { useRoute, useRouter } from "vue-router";
import { useDB } from "@/composables";
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
    projects: {
      required: true,
      type: Object as PropType<IProject>,
    },
  },
  setup() {
    const { projects } = useDB();
    const route = useRoute();
    const slug = route.params.slug;
    const project = projects.find((p) => p.slug == slug);

    // TODO: fix redirect. Move it to onBeforeMounted
    if (!project) {
      useRouter().push({ name: "home" });
    }

    return { project };
  },
});
</script>
