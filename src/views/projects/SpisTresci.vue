<template>
  <CoverImage :url="`/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <Carousel items-to-show="1" :paths="imagesPaths" />
  </div>
  <h3 class="section-title">My role in this project</h3>

  <div class="section-row">
    <h3 class="section-title">Chalanges</h3>
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
import {
  Carousel,
  CoverImage,
  OtherProjectCaseStudies,
  Testimonial,
} from "@/components";
import { useDB, useProject } from "@/composables";
import { IProject, ITestimonial } from "@/types";

export default defineComponent({
  name: "SpisTresci",
  components: {
    CoverImage,
    OtherProjectCaseStudies,
    Testimonial,
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
      imagesPaths: getImagesPaths(props.project, 5),
    };
  },
});
</script>
