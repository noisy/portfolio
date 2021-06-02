<template>
  <Bio />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Bio from "@/components/Bio.vue";

// import {
// Bio,
// SkillsOverview,
// Companies,
// Testimonials,
// ProjectThumbnail,
// FeaturedProjects,
// LatestBlogPosts,
// FeaturedIn,
// HireMeFooter,
// } from "@/components/";

export default defineComponent({
  name: "Home",
  components: {
    Bio,
    HelloWorld,
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

// import { useDB } from "../composables/useDB.js";

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
