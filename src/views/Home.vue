<template>
  <Bio />
  <SkillsOverview />
  <Companies />
  <Testimonials :testimonials="testimonials" />
  <!-- <FeaturedProjects/> -->
  <!-- <LatestBlogPosts/> -->
  <ProjectThumbnail :project="project" />
  <FeaturedIn />
  <HireMeFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as components from "@/components";

import { useDB } from "@/composables/useDB";

export default defineComponent({
  name: "Home",
  components,
  setup() {
    const { testimonials, projects } = useDB();
    return { testimonials, project: projects[0] };
  },
});
</script>
