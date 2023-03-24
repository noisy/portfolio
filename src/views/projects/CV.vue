<template>
  <CoverImage :url="`@/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <p>
      This project evolved from
      <a
        href="https://m.goit.global/pl/?utm_source=site&utm_medium=mainsite&utm_campaign=button"
        >GoIT 7 days HTML+CSS Marathon</a
      >, whereas a course attendant, I was creating a webpage based on a graphic
      template from <a href="https://www.figma.com/">Figma</a>. During the
      course, I uploaded the whole thing into GitHub and decided to convert the
      entire code into a bilingual version of my CV.
    </p>
    <h3 class="section-title">My role in this project</h3>
    <p>
      Creating an up-to-date CV is the first and most crucial step to
      participating in the recruitment process. It goes without saying that if
      you don't have a CV, you don't have a new job either. It is essential to
      collect your experience and skills and then transfer it into a previously
      created template. At the same time, from the very beginning, I assumed
      that due to the continuous development of my skills, the created CV would
      not be a closed document created once and for all but rather a place to be
      updated from time to time.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <h4>Bingular version</h4>
    <p>
      Although the original version of this web-based CV was created only in the
      Polish version (it was much easier due to type of previous work and
      experience), the default version of the project was to be the English one,
      which is mandatory in the IT industry. Therefore, the challenge was to
      create such a CV that would be easy to maintain in both language versions,
      giving the possibility of simple generation of pdf files, but also
      available in the same place for viewers.
    </p>
    <p>
      I created two HTML files operating on the same CSS file and integrated
      them with a simple language switch. It's not a perfect solution because it
      forces you to change the code in both files simultaneously, but it must be
      enough for now.
    </p>
    <h4>Version to print</h4>
    <h4>Strange spaces in lists</h4>
    <p></p>
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
</template>

<script setup lang="ts">
import { CoverImage } from "@/components";
import type { IProject, ITestimonial } from "@/types";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();
</script>
