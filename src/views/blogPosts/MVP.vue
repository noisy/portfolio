<template>
  <CoverImage :url="blogPost.thumbnail" />
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { CoverImage } from "@/components";
import { IBlogPost } from "@/types";

export default defineComponent({
  name: "MVP",
  components: { CoverImage },
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
