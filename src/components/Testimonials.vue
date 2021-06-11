<template>
  <section class="section-proof section bg-white py-5">
    <div class="container-fluid">
      <div class="testimonials">
        <testimonial
          v-for="t in testimonials"
          :key="t.author"
          :author="t.author"
          :body="t.body"
          :title="t.title"
          :picture-url="t.pictureUrl"
          :type="t.type"
          :url="t.url"
        >
        </testimonial>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import Testimonial from "./Testimonial.vue";
import { ITestimonial } from "@/types";

export default defineComponent({
  components: { Testimonial },
  props: {
    testimonials: {
      required: true,
      type: Array as PropType<ITestimonial[]>,
    },
  },
});
</script>
