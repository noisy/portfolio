<template>
  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <h3 class="section-title">My Role in This Project</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Chalanges</h3>
    <h4 class="section-title">Complete Re-Write of Whole Payment System</h4>
    <h4 class="section-title">Non-Consistent Architecture</h4>
    <h4 class="section-title">Legacy Code</h4>
  </div>

  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
  </div>
</template>

<script lang="ts">
import { useDB } from "@/composables";
import type { IProject, ITestimonial } from "@/types";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Pitchup",
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
</style>
