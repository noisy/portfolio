<template>
  <div v-if="blogPost">
    <BlogPostHeader :blog-post="blogPost" />
    <section class="single-post-wrapper single-col-max-width py-5 px-4 mx-auto">
      <CoverImage :url="blogPost.thumbnail" />
      <router-view :blog-post="blogPost" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { BlogPostHeader, CoverImage } from "@/components";
import { useDB } from "@/composables";
import { computed } from "vue";
import { useRoute } from "vue-router";

const { blogPosts } = useDB();

const blogPost = computed(() => {
  const route = useRoute();
  return blogPosts.find((p) => `blog-${p.slug}` == route.name);
});
</script>
