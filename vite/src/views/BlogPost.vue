<template>
  <div v-if="blogPost">
    <BlogPostHeader :blog-post="blogPost" />
    <section class="single-post-wrapper single-col-max-width py-5 px-4 mx-auto">
      <CoverImage :url="blogPost.thumbnail" />
      <router-view :blog-post="blogPost" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUpdate, ref } from "vue";
import { useRoute } from "vue-router";
import { BlogPostHeader, CoverImage } from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "BlogPost",
  components: { BlogPostHeader, CoverImage },
  setup() {
    const { blogPosts } = useDB();
    let blogPost = ref();

    const loadBlogPostData = () => {
      const route = useRoute();
      blogPost.value = blogPosts.find((p) => `blog-${p.slug}` == route.name);
    };
    onBeforeMount(loadBlogPostData);
    onBeforeUpdate(loadBlogPostData);

    return { blogPost };
  },
});
</script>
