<template>
  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <h3 class="section-title">My role in this project</h3>
    <Carousel :items-to-show="5" :paths="imagesPaths" />
  </div>

  <div class="section-row">
    <h3 class="section-title">Payment Handling</h3>
    <h4 class="section-title">Complex workflow of components</h4>
  </div>
  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
  </div>
</template>

<script lang="ts">
import { Carousel } from "@/components";
import { useDB, useProject } from "@/composables";
import type { IProject, ITestimonial } from "@/types";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Pitchup",
  components: {
    Carousel,
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
  setup(props) {
    const otherCaseStudies = ["opera-mobile"];
    const { projects } = useDB();
    const { getImagesPaths } = useProject();

    return {
      projects: projects.filter((p) => otherCaseStudies.includes(p.slug)),
      imagesPaths: getImagesPaths(props.project, 10),
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
</style>
