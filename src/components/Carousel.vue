<template>
  <Vue3Carousel :items-to-show="itemsToShow" :wrap-around="true">
    <slide v-for="path in paths" :key="path">
      <img class="d-block w-100" :src="path" alt="" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </Vue3Carousel>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import {
  Navigation,
  Pagination,
  Slide,
  Carousel as Vue3Carousel,
} from "vue3-carousel";

export default defineComponent({
  name: "Carousel",
  components: {
    Vue3Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    itemsToShow: {
      type: Number,
      required: true,
    },
    paths: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
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
