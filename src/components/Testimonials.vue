<template>
  <section
    class="section-proof section bg-white py-5"
    style="padding-top: 0 !important"
  >
    <div class="container-fluid">
      <div class="testimonials container">
        <Carousel :items-to-show="1.5" :wrap-around="true">
          <Slide v-for="t in testimonials" :key="t.author">
            <Testimonial
              class="testimonial"
              :author="t.author"
              :body="t.body"
              :title="t.title"
              :picture-url="t.pictureUrl"
              :type="t.type"
              :url="t.url"
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
<script lang="ts">
import type { ITestimonial } from "@/types";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import Testimonial from "./Testimonial.vue";

export default defineComponent({
  components: {
    Testimonial,
    Carousel,
    Slide,
    Pagination,
  },
  props: {
    testimonials: {
      required: true,
      type: Array as PropType<ITestimonial[]>,
    },
  },
});
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
