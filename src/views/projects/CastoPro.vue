<template>
  <CoverImage :url="`@/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project background</h3>
    <p>CastoPro is Polish Castorama's loyalty program for professionals.</p>
  </div>

  <div class="section-row">
    <h3 class="section-title">My role in this project</h3>
    <p>
      As a part of my recruitment process for a prominent Polish analytics
      company, I was tasked with testing the CastoPro website. The objective was
      to find an error on the website within a timeframe of 48 hours. I was
      provided with three pieces of information, which were: the CastoPro
      website link, timeframe, and the task.
    </p>
    <p>
      <i
        >Disclaimer: CastoPro was selected as a case study due to its public
        accessibility and the fact that none of the identified issues were
        security threats.</i
      >
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <p>
      Throughout the project, I faced several challenges due to the lack of
      information and specific requirements. With no clear task description, I
      had to make assumptions on whether to test the entire website or just a
      specific page. Given that the main page was relatively simple, I decided
      to focus on testing the entire login and registration pages instead, as
      these pages are often very error-prone. Additionally, no specific testing
      environment or responsive version was requested.
    </p>
    <p>
      To address these challenges, I established the following requirements:
    </p>
    <ul>
      <li>The website's <b>functionality should work</b> seamlessly.</li>
      <li>
        The website should be able to handle <b>negative scenarios</b> where
        users fail to provide all the required data in the fields, such as
        incomplete forms or incorrect input.
      </li>
      <li>
        In such cases, the website should provide easy-to-understand
        <b>feedback to assist the user</b>.
      </li>
      <li>
        The website should be thoroughly tested on both
        <b>desktop and mobile</b>
        browsers to ensure optimal performance on all devices.
      </li>
      <li>
        Since the website targets the Polish market, it was important to
        prioritize testing on popular web browsers used in Poland, namely
        <b>Google Chrome</b> and <b>Mozilla Firefox</b>, which together
        represent over
        <a
          href="https://web.archive.org/web/20230329150834/https://www.similarweb.com/browsers/poland/"
          >82% of the polish market share</a
        >.
      </li>
    </ul>
  </div>

  <div class="section-row">
    <h3 class="section-title">The task</h3>
    <p>
      I noticed only one minor technical error on the main page, so I assumed
      this task was about the whole site. I also decided to use the most popular
      web browser (Chrome) and check CastoPro on smaller widths.
    </p>
    <p>
      Initially, I divided the task into static pages and forms. Part one was
      self-explanatory because pages like 'regulations,' 'faq,' 'benefits,' or
      'privacy-policy' had no interactive elements. Their testing concerned the
      general checking of the whole, but also, i.e., the correctness of the
      links and behavior of the pages at different window widths. I also
      included the mobile version of the top drop-down menu in this category.
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
      Finally, I decided to divide all the cases into more specific categories.
      I have listed them all in order of importance to the end user:
    </p>
    <ul>
      <li>main page</li>
      <li>registration</li>
      <li>login</li>
      <li>responsive design</li>
      <li>website usability</li>
    </ul>
  </div>

  <div class="section-row">
    <h3 class="section-title">What I learned</h3>
    <p>
      External E2E tests of the website in production with constant changes do
      not make the tester's job easier.
    </p>
    <p>
      Also: It's hard to do an excellent job without a test account or
      information on how to create it easily.
    </p>
  </div>
</template>

<script setup lang="ts">
import { CoverImage } from "@/components";
import type { IProject, ITestimonial } from "@/types";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();
</script>
