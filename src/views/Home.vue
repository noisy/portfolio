<template>
  <Bio />
  <SkillsOverview />
  <Companies />
  <Testimonials :testimonials="testimonials" />
  <!-- <FeaturedProjects/> -->
  <!-- <LatestBlogPosts/> -->
  <!-- <FeaturedIn/> -->
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
    const { testimonials } = useDB();
    return { testimonials };
  },
});

// import {
//   Bio,
//   SkillsOverview,
//   Companies,
//   Testimonials,
//   ProjectThumbnail,
//   FeaturedProjects,
//   LatestBlogPosts,
//   FeaturedIn,
//   HireMeFooter,
// } from "../components/index.js";

// export default {
//   components: {
//     Bio,
//     SkillsOverview,
//     Companies,
//     Testimonials,
//     ProjectThumbnail,
//     FeaturedProjects,
//     LatestBlogPosts,
//     FeaturedIn,
//     HireMeFooter,
//   },
//   template: `
//     <Bio/>
//     <SkillsOverview/>
//     <Companies/>
//     <Testimonials :testimonials="testimonials" />
//     <FeaturedProjects/>
//     <LatestBlogPosts/>
//     <FeaturedIn/>
//     <HireMeFooter/>
//   `,
//   setup(props) {
//     const { testimonials } = useDB();
//     return { testimonials };
//   },
// };
</script>
