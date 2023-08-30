<template>
  <section class="section-latest-blog py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-5">
        Latest Blog Posts
      </h3>

      <BlogPostsGrid :blog-posts="blogPosts" />
    </div>

    <div class="text-center">
      <router-link class="btn btn-primary" :to="{ name: 'blog' }"
        >View all posts</router-link
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { BlogPostsGrid } from "@/components";
import { useDB } from "@/composables";

const { blogPosts } = useDB();
</script>
