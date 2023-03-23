<template>
  <CoverImage :url="`@/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <p>CastoPro is Polish Castorama's loyalty program for the professionals.</p>
    <h3 class="section-title">My role in this project</h3>
    <p>
      Testing the CastoPro website was part of my recruitment process for one of
      the prominent Polish analytics companies. For this task, I was given three
      pieces of information:
    </p>
    <ul>
      <li>link: CastoPro website</li>
      <li>timeframe: 48h</li>
      <li>task: find an error on the page</li>
    </ul>
    <p>
      I decided to include CastoPro as a project because it's a public website
      and some of the reported bugs were already corrected.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <p>
      Because of the lack of information and no requirements about this task, I
      had to make some assumptions. It was unclear from the description if I
      should test only one page with this exact address or the entire content
      for the loyalty program. There were also no additional requirements for a
      specific testing environment and a responsive version.
    </p>
    <h4 class="section-title">The task</h4>
    <p>
      I noticed only one minor technical error on the main page, so I assumed
      this task was about the whole site. I also decided to use the most popular
      web browser at that time (Chrome) and check CastoPro on smaller widths.
    </p>
    <p>
      Initially, I divided the task into two categories - static pages and
      forms. Part one was pretty self-explanatory because pages like
      'regulations,' 'faq,' 'benefits' or 'privacy-policy' had no interactive
      elements. Their testing concerned the general checking of the whole, but
      also i.e., the correctness of the links and behavior of the pages at
      different window widths. I also included the mobile version of the top
      drop-down menu in this category.
    </p>
    <p>
      Forms were a different story. In this case, both 'registration' and
      'login' were imperfect. The problem was that, along with the task, I did
      not receive any data on which I could test the correct registration/login
      process. And to fully complete the registration process, an actual
      taxpayer identification number and a telephone number to verify the
      account creation are required.
    </p>
    <p>
      Finally, I decided to divide all the cases into more precise categories. I
      have listed them all in order of importance to the end user:
    </p>
    <ul>
      <li>main page</li>
      <li>registration</li>
      <li>login</li>
      <li>responsive design</li>
      <li>website usability</li>
    </ul>
  </div>
  <!--//section-row-->
  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
  </div>
  <p>
    External E2E tests of the website with constant smaller and larger changes
    do not make the tester's job easier.
  </p>

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
import { CoverImage, Testimonial } from "@/components";
import type { IProject, ITestimonial } from "@/types";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();
</script>
