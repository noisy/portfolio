<template>
  <div class="mb-5">
    <img class="img-fluid" :src="url" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CoverImage",
  props: {
    url: {
      required: true,
      type: String,
    },
  },
});
</script>
