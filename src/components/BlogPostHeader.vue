<template>
  <div class="header-intro theme-bg-primary text-white py-5">
    <div class="container text-center">
      <h2 class="page-heading col-12 col-lg-9 col-xl-8 mx-auto mb-1">
        {{ blogPost.title }}
      </h2>
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
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBlogPost } from "@/types";
defineProps<{ blogPost: IBlogPost }>();
</script>
