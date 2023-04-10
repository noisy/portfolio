<template>
  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <h3 class="section-title">My Role in This Project</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <h4 class="section-title">Implementing Cutting-Edge HTML Standard</h4>
    <h4 class="section-title">
      Non-Reliable BTS Stations &amp; Weather (Sic!)
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
</template>

<script setup lang="ts">
import { Testimonial } from "@/components";
import type { IProject, ITestimonial } from "@/types";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();
</script>
