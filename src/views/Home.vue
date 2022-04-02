<template>
  <Bio />
  <SkillsOverview />
  <Companies />
  <Testimonials :testimonials="testimonials" />
  <FeaturedProjects />
  <LatestBlogPosts />
  <FeaturedIn />
</template>

<script setup lang="ts">
import {
  Bio,
  Companies,
  FeaturedIn,
  FeaturedProjects,
  LatestBlogPosts,
  SkillsOverview,
  Testimonials,
} from "@/components";
import { useDB } from "@/composables";

const { testimonials } = useDB();
</script>
