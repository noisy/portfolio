<template>
  <div v-if="blogPost">
    <BlogPostHeader :blog-post="blogPost" />
    <router-view :blog-post="blogPost" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUpdate, ref } from "vue";
import { useRoute } from "vue-router";
import { BlogPostHeader } from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "BlogPost",
  components: { BlogPostHeader },
  setup() {
    const { blogPosts } = useDB();
    let blogPost = ref();

    const loadProjectData = () => {
      const route = useRoute();
      blogPost.value = blogPosts.find((p) => `blog-${p.slug}` == route.name);
    };
    onBeforeMount(loadProjectData);
    onBeforeUpdate(loadProjectData);

    return { blogPost };
  },
});
</script>
<style lang="scss">
.project-wrapper {
  p {
    margin-bottom: 1.5rem;
  }
  .section-row {
    margin-bottom: 4rem;
  }
}
</style>
