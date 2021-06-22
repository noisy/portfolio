<template>
  <CoverImage :url="`/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <h3 class="section-title">My role in this project</h3>
    <!-- <carousel :items-to-show="5" :wrap-around="true">
      <slide v-for="slide in 10" :key="slide">
        <img
          class="d-block w-100"
          :src="`/images/projects//${slide}.png`"
          alt=""
        />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel> -->
  </div>

  <div class="section-row">
    <h3 class="section-title">Payment Handling</h3>
    <h4 class="section-title">Complex workflow of components</h4>
  </div>
  <!--//section-row-->
  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
// import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { CoverImage } from "@/components";
import { useDB } from "@/composables";
import "vue3-carousel/dist/carousel.css";
import { IProject, ITestimonial } from "@/types";

export default defineComponent({
  name: "Pitchup",
  components: {
    CoverImage,
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
  },
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true,
    },
    testimonials: {
      type: Array as PropType<ITestimonial[]>,
      required: true,
    },
  },
  setup() {
    const otherCaseStudies = ["opera-mobile"];
    const { projects } = useDB();
    return {
      projects: projects.filter((p) => otherCaseStudies.includes(p.slug)),
    };
  },
});
</script>
<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel :deep() button {
  /* Colors */
  --carousel-color-primary: #41a4f5;
  --carousel-color-secondary: #0a71c6;
  --carousel-color-white: #ffffff;

  /* Navigation */
  --carousel-nav-width: 30px;
}
.carousel__slide {
  margin: 0 5px;
}
</style>
