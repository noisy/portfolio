<template>
  <BlogHeader />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BlogHeader } from "@/components";

export default defineComponent({
  name: "Blog",
  components: { BlogHeader },
});
</script>
