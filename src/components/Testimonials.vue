<template>
  <section
    class="section-proof section bg-white py-5"
    style="padding-top: 0 !important"
  >
    <div class="container-fluid">
      <div class="testimonials container">
        <Carousel
          :items-to-show="itemsToShow"
          :wrap-around="true"
          :key="itemsToShow"
        >
          <Slide v-for="t in testimonials" :key="t.author">
            <Testimonial
              class="testimonial"
              :author="t.author"
              :body="t.body"
              :title="t.title"
              :picture-url="t.pictureUrl"
              :type="t.type"
              :url="t.url"
              :signature="t.signature"
            />
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ITestimonial } from "@/types";
import { computed } from "vue";
import { useBreakpoint } from "vue-composable";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import Testimonial from "./Testimonial.vue";

const { XL, XXL } = useBreakpoint({
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1400,
});

const itemsToShow = computed(() => {
  if (XXL.value) return 1.6;
  if (XL.value) return 1.4;
  return 1;
});

defineProps<{ testimonials: ITestimonial[] }>();
</script>

<style scoped>
.carousel :deep() button {
  /* Colors */
  --carousel-color-primary: #41a4f5;
  --carousel-color-secondary: #0a71c6;
  --carousel-color-white: #ffffff;

  /* Navigation */
  --carousel-nav-width: 30px;
}

.testimonial {
  margin: 10px;
}
.carousel__slide {
  margin: 20px auto;
}
</style>
