<template>
  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <h3 class="section-title">My Role in This Project</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
  </div>
  <Testimonial
    v-for="t in testimonials"
    :key="t.author"
    :author="t.author"
    :body="t.body"
    :title="t.title"
    :picture-url="t.pictureUrl"
    :type="t.type"
    :url="t.url"
  >
  </Testimonial>
</template>

<script lang="ts">
import { Testimonial } from "@/components";
import { useDB } from "@/composables";
import type { IProject, ITestimonial } from "@/types";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HiveProjects",
  components: {
    Testimonial,
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
    const otherCaseStudies: string[] = [];
    const { projects } = useDB();
    return {
      projects: projects.filter((p) => otherCaseStudies.includes(p.slug)),
    };
  },
});
</script>
