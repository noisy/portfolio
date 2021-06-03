<template>
  <Bio />
  <SkillsOverview />
  <Companies />
  <Testimonials :testimonials="testimonials" />

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Bio from "@/components/Bio.vue";
import Companies from "@/components/Companies.vue";
import SkillsOverview from "@/components/SkillsOverview.vue";
import Testimonials from "@/components/Testimonials.vue";

import { useDB } from "@/composables/useDB";

export default defineComponent({
  name: "Home",
  components: {
    Bio,
    Companies,
    SkillsOverview,
    Testimonials,
    HelloWorld,
  },
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
