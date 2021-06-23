<template>
  <div class="card rounded-0 border-0 shadow-sm mb-5">
    <div class="card-img-container position-relative photo-wrapper">
      <img
        class="card-img-top rounded-0 object-fit-cover"
        :src="blogPost.thumbnail"
        alt=""
      />
      <div class="card-img-overlay overlay-mask overlay-logo text-center p-0">
        <div class="overlay-mask-content text-center w-100 position-absolute">
          <router-link
            class="btn btn-primary"
            :to="{ name: `blog-${blogPost.slug}` }"
            >Read more</router-link
          >
        </div>

        <router-link
          class="overlay-mask-link position-absolute w-100 h-100"
          :to="{ name: `blog-${blogPost.slug}` }"
        ></router-link>
      </div>
    </div>
    <div class="card-body pb-4">
      <h4 class="card-title text-truncate mb-2">
        <router-link
          class="text-link"
          :to="{ name: `blog-${blogPost.slug}` }"
          >{{ blogPost.title }}</router-link
        >
      </h4>
      <div class="card-text">
        <ul class="meta list-inline mb-1">
          <li class="list-inline-item me-3">
            <i class="far fa-clock me-2"></i
            >{{ blogPost.publishedAt.toDateString() }}
          </li>
          <li class="list-inline-item">
            <i class="fas fa-comment me-2"></i
            ><a class="text-link" href="#">4 Comments</a>
          </li>
        </ul>
        <div class="excerpt">
          {{ blogPost.intro }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IBlogPost } from "@/types";
export default defineComponent({
  name: "BlogPostThumbnail",
  props: {
    blogPost: {
      type: Object as PropType<IBlogPost>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.photo-wrapper {
  position: relative;
  overflow: hidden;
  padding-top: calc(100% * 1 / 2);
}
.object-fit-cover {
  object-fit: cover;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

.photo-wrapper:hover {
  .object-fit-cover {
    transform: translate(-50%, -50%) scale(1.02) !important;
  }
}
</style>
