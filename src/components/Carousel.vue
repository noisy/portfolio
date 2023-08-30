<template>
  <Vue3Carousel :items-to-show="itemsToShow" :wrap-around="true">
    <Slide v-for="path in paths" :key="path">
      <img class="d-block w-100" :src="getAsset(path)" alt="" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Vue3Carousel>
</template>

<script setup lang="ts">
import { useAssets } from "@/composables";
import {
  Carousel as Vue3Carousel,
  Navigation,
  Pagination,
  Slide,
} from "vue3-carousel";
defineProps<{ paths: string[]; itemsToShow: number }>();
const { getAsset } = useAssets();
</script>

<style lang="scss" scoped>
.carousel :deep() button {
  /* Colors */
  --carousel-color-primary: #41a4f5;
  --carousel-color-secondary: #0a71c6;
  --carousel-color-white: #ffffff;

  /* Navigation */
  --carousel-nav-width: 30px;
}
</style>
