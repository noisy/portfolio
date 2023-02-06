<template>
  <BlogHeader />
  <div class="section pt-5">
    <div class="container">
      <BlogPostsGrid
        :blog-posts="[...blogPosts, ...blogPosts, ...blogPosts, ...blogPosts]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogHeader, BlogPostsGrid } from "@/components";
import { useDB } from "@/composables";

const { blogPosts } = useDB();
</script>
