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
import { useDB } from "@/composables";

const { testimonials } = useDB();
</script>
