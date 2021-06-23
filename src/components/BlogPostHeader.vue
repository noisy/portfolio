<template>
  <!-- <div class="header-intro theme-bg-primary text-white py-5">
    <div class="container position-relative">
      <h2 class="page-heading mb-3">{{ title }}</h2>
      <div class="page-heading-tagline"><slot name="tagline" /></div>
      <slot name="logo" />
    </div>
  </div> -->
  <div class="header-intro theme-bg-primary text-white py-5">
    <div class="container text-center">
      <h2 class="page-heading mb-1">{{ blogPost.title }}</h2>
      <div class="page-heading-tagline mx-auto mb-3">
        {{ blogPost.tagline }}
      </div>
      <img
        class="profile-small d-inline-block rounded-circle mb-3"
        src="/images/profile.png"
        alt=""
      />
      <ul class="page-heading-post-meta list-inline mb-0">
        <li class="list-inline-item me-3">
          <i class="far fa-clock me-2"></i
          >{{ blogPost.publishedAt.toDateString() }}
        </li>
        <li class="list-inline-item">
          <i class="fas fa-comment me-2"></i
          ><a class="text-link" href="#comments-block">8 Comments</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IBlogPost } from "@/types";

export default defineComponent({
  name: "BlogPostHeader",
  props: {
    blogPost: {
      type: Object as PropType<IBlogPost>,
      required: true,
    },
  },
});
</script>
