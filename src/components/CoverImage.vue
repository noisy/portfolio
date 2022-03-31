<template>
  <div class="mb-5">
    <img class="img-fluid w-100" :src="getAsset(url)" alt="" />
  </div>
</template>

<script lang="ts">
import { useAssets } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoverImage",
  props: {
    url: {
      required: true,
      type: String,
    },
  },
  setup() {
    const { getAsset } = useAssets();
    return { getAsset };
  },
});
</script>
