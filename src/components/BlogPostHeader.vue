<template>
  <div class="header-intro theme-bg-primary text-white py-5">
    <div class="container text-center">
      <h2 class="page-heading mb-1">{{ blogPost.title }}</h2>
      <div class="page-heading-tagline mx-auto mb-3">
        {{ blogPost.tagline }}
      </div>
      <img
        class="profile-small d-inline-block rounded-circle mb-3"
        src="@/images/profile.png"
        alt=""
      />
      <ul class="page-heading-post-meta list-inline mb-0">
        <li class="list-inline-item me-3">
          <font-awesome-icon :icon="['far', 'clock']" class="me-2" />{{
            blogPost.publishedAt.toDateString()
          }}
        </li>
        <li class="list-inline-item d-none">
          <font-awesome-icon icon="comment" class="me-2" />
          <a class="text-link" target="_self" href="#comments-block"
            >8 Comments</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBlogPost } from "@/types";
defineProps<{ blogPost: IBlogPost }>();
</script>
