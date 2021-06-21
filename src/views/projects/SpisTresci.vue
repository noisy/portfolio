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
import { CoverImage, OtherProjectCaseStudies, Testimonial } from "@/components";
import { useDB } from "@/composables";
import { IProject, ITestimonial } from "@/types";

export default defineComponent({
  name: "SpisTresci",
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
