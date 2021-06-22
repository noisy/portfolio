<template>
  <CoverImage :url="`/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <h3 class="section-title">My role in this project</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Chalanges</h3>
    <h4 class="section-title">Implementing Cutting Edge HTML standard</h4>
    <h4 class="section-title">
      Non reliable BTS Stations &amp; Weather (sic!)
    </h4>
  </div>
  <!--//section-row-->
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

  <OtherProjectCaseStudies :projects="projects" />
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { CoverImage, OtherProjectCaseStudies, Testimonial } from "@/components";
import { useDB } from "@/composables";
import { IProject, ITestimonial } from "@/types";

export default defineComponent({
  name: "OperaMobile",
  components: {
    CoverImage,
    OtherProjectCaseStudies,
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
    const otherCaseStudies = ["opera-mobile"];
    const { projects } = useDB();
    return {
      projects: projects.filter((p) => otherCaseStudies.includes(p.slug)),
    };
  },
});
</script>
