<template>
  <CoverImage :url="`@/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project background</h3>
    <p>
      CastoPro is a loyalty program for professionals offered by Castorama, a
      leading home improvement retailer in Poland.
    </p>
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
          >82% of the Polish market share</a
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
      self-explanatory, as pages such as "Regulations," "FAQ," "Benefits," and
      "Privacy Policy" had no interactive elements. Testing these pages involved
      general checks of the entire page, as well as verifying the correctness of
      the links and the behavior of the pages at different window widths.
      Additionally, the mobile version of the top drop-down menu was included in
      this category.
    </p>
    <p>
      Forms were a different story. In this case, both the registration and
      login forms were found to be imperfect. Despite having access to only a
      limited number of real phone numbers, I was able to perform tests to the
      best of my ability. The most interesting part of the testing came when I
      began exploring negative paths, as both forms proved to be like
      minefields, with numerous issues to address. Overall, this part of the
      task was a lot of fun!
    </p>
    <p>
      Finally, I decided to divide all the cases into more specific categories.
      I have listed them all in order of importance to the end user:
    </p>
    <ul>
      <li>
        <a
          href="https://github.com/lukmarcus/Today-I-Learned/tree/main/Test_Case_Studies/CastoPro#main-page"
          >Main page</a
        >
      </li>
      <li>
        <a
          href="https://github.com/lukmarcus/Today-I-Learned/tree/main/Test_Case_Studies/CastoPro#registration"
          >Registration</a
        >
      </li>
      <li>
        <a
          href="https://github.com/lukmarcus/Today-I-Learned/tree/main/Test_Case_Studies/CastoPro#login"
          >Login</a
        >
      </li>
      <li>
        <a
          href="https://github.com/lukmarcus/Today-I-Learned/tree/main/Test_Case_Studies/CastoPro#responsive-design"
          >Responsive design</a
        >
      </li>
      <li>
        <a
          href="https://github.com/lukmarcus/Today-I-Learned/tree/main/Test_Case_Studies/CastoPro#website-usability"
          >Website usability</a
        >
      </li>
    </ul>
  </div>

  <div class="section-row">
    <h3 class="section-title">What I learned</h3>
    <p>
      This task reminded me that in the real world, we don't always have access
      to perfect information or clear requirements. However, this lack of
      clarity should not be an excuse for not performing the necessary job,
      especially when faced with urgency. In such situations, relying on one's
      own judgment and knowledge about industry standards can serve as useful
      guidelines for identifying what truly needs to be done.
    </p>
    <p>
      On a more practical note, this task reminded me to always plan extra time
      for testing negative paths, as they often contain the most difficult and
      tricky bugs to identify and report.
    </p>
  </div>
</template>

<script setup lang="ts">
import { CoverImage } from "@/components";
import type { IProject, ITestimonial } from "@/types";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();
</script>
