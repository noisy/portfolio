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

  <HireMeFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageHeader, ProjectInfo, HireMeFooter } from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "Project",
  components: {
    PageHeader,
    ProjectInfo,
    HireMeFooter,
  },
  setup() {
    const otherCaseStudies = ["opera-max"];
    const { projects, testimonials } = useDB();
    return {
      project: projects.find((p) => p.slug == "opera-mobile"),
      projects: projects.filter((p) => otherCaseStudies.includes(p.slug)),
      testimonials: testimonials.filter((p) =>
        p.relevantForProjects.includes("opera-mobile")
      ),
    };
  },
});
</script>
