<template>
  <CoverImage :url="`@/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project background</h3>
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
      Polish version (it was much easier due to the type of previous work and
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
    <h4>Versions to print</h4>
    <p>
      With the idea of printing pages directly to the pdf files, I introduced a
      new problem to the project. I should decide what will be exported for
      printing, not be dependent on the page's content. I didn't want to include
      a language switch or a recommendations section in the pdf file.
      Additionally, I wanted to control where the page breaks would occur so
      that the text section wouldn't be split across two pages.
    </p>
    <p>
      Fortunately, such a problem was solved a long before, and I only needed to
      implement the appropriate CSS classes into the code. In addition, the
      clause distance from the other sections had to be significantly increased
      to act as a footer and not leave empty white space at the bottom of the
      second page.
    </p>
    <h4>Strange lists spacing</h4>
    <p>
      Once all of the above issues were resolved, I noticed two annoying bugs
      with lists. Not only was the indentation of the second and subsequent
      lines of list items not identical to the first, but there were also spaces
      at the beginning of some lines in Firefox. Ultimately, entire lists looked
      broken due to the lack of vertical alignment.
    </p>
    <p>
      At first, I thought this was the problem with the Prettier extension for
      Visual Code Studio, but the problem turned out to be a bullet in the
      lists, which I had previously manipulated too much. The patch created for
      one bug also fixed the second one, making it a double-win situation.
    </p>
  </div>
  <div class="section-row">
    <h3 class="section-title">What I learned</h3>
  </div>
  <p>
    I knew the basics of HTML and CSS before, but I can't remember the last time
    I used them. It was good to systematize all this knowledge.
  </p>
  <p>
    In addition, I started using Visual Studio Code from this project and
    learned the basics of Git and its use from the command line.
  </p>
</template>

<script setup lang="ts">
import { CoverImage } from "@/components";
import type { IProject, ITestimonial } from "@/types";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();
</script>
