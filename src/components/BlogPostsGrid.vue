<template>
  <div class="blog-cards row">
    <div v-for="post in blogPosts" :key="post.slug" class="col-12 col-lg-6">
      <BlogPostThumbnail :blog-post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogPostThumbnail } from "@/components";
import type { IBlogPost } from "@/types";
defineProps<{ blogPosts: IBlogPost[] }>();
</script>
