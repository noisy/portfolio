<template>
  <CoverImage :url="`@/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>

    <p class="video-container">
      <iframe
        class="video"
        src="https://youtu.be/ialZcLaI17Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </p>

    <h3 class="section-title">My role in this project</h3>
    <p>
      I joined Techland's Quality Assurance team when Dead Island was in the
      advanced production phase. Daily testing of this game's new builds was the
      main focus of our work. Every day through our QA Leader we received
      information about new implementations or changes in the project to be
      tested on PC, PlayStation 3 and Xbox 360.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <p>
      In 2015, I had a lot of experience with Django&amp;Python, only some
      experience with jQuery and BackboneJS, but no prior experience with
      Angular JS. That was a challenge of its own for me.
    </p>
    <p>
      Fortunately, our client and our team were long-term oriented, so we were
      embracing opportunities to learn new things if particular tasks were not
      critical. Everyone in a group was contributing the most in areas where he
      felt the strongest, but we created a culture of working on things outside
      of our area of expertise. That helped everyone in the team learn a lot of
      new things.
    </p>

    <h4 class="section-title">
      Bootstrapping new team for a client, new code base, no know-how
    </h4>
    <p>
      Because we formed a new independent team, we started with a very narrow
      understanding of the codebase, with limited know-how about the whole
      project. We had contact with all in-house developers and a Product Owner
      from Seerene. As you can imagine, it was more challenging to learn about
      all the nitty-gritty details without having people with the knowledge
      inside the same room. To deal with that, we needed to spend a lot of time
      on talks via slack or video calls.
    </p>
    <p>
      The critical part was to focus on asking the right questions, to
      understand things that were truly necessary to develop scoped tasks.
    </p>
    <p>
      I believe the key to good performance was Planning and Estimation
      meetings, during which we together dissected all problems while trying to
      identify risks.
    </p>

    <h4 class="section-title">
      Lack of infrastructure on our end; Custom CI build-system
    </h4>
    <p>
      To be able to work on a product efficiently, our team needed to also set
      up a few production-like instances of the project: our local production,
      staging, few test instances, which later were used by our QAs.
    </p>
    <p>
      Earlier there were attempts to do those deploys with some basic bash
      scripts. Despite the simplicity, our team quickly realize that this
      solution was not flexible enough and wasn't scaling well.
    </p>
    <p>
      At some point I started working on proper containerization with Docker of
      the whole thing, creating with Jenkins the building pipeline (CI),
      responsible for running all unit and E2E tests, but also capable of
      building new tests instances on-demand with just a few clicks. One of the
      most important features of that build system (which speeds up the work of
      our QAs significantly), was the ability to clone prepared databases
      between instances, with just a few clicks.
    </p>
    <p>
      All instances build on-demand were also always automatically dynamically
      set up with their separate subdomain and with the support of HTTPS &amp;
      SSL certificates.
    </p>
    <p>
      I've built that build system on my own from scratch using
      <a href="https://github.com/cookiecutter/Cookiecutter">Cookiecuttter</a>
      library and its Jinja template language. That helped keep the whole thing
      very simple, yet powerful and robust.
    </p>
    <p>
      Before I left STXNext and this project, I've successfully transferred all
      my knowledge about this build system to other developers, which I believe
      also proved it was easy to understand also from the code's perspective.
    </p>

    <h4 class="section-title">Optimizing the speed of database queries</h4>
    <p>
      To be precise, it was not something on which I've worked personally,
      however, my team did. I've decided to mention this anyway, because of the
      fact how this task was handled. Two guys from our team, which were the
      most into databases... decided to work on this together. Pair programming,
      analyzing, refactoring took them over a month, however, the result was
      stunning. Without any major hiccups, they optimized the execution time of
      business-critical queries, from dozens of minutes to hundreds of
      milliseconds.
    </p>
    <p>
      While working in this team, I've learned how powerful pair-programming can
      be as a tool to develop quickly important parts of code with high quality
      in mind. Additionally, this speeds up the learning process of
      participating developers tremendously. I've personally used that technique
      many times later within that project, on a smaller scale. Since then, I'm
      a huge fan of pair programming! (Which BTW, what my other project proved
      to me... can be successfully done also while working remotely!)
    </p>
  </div>
  <!--//section-row-->
  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
    <p>
      Often the biggest lessons you learn happens after some big mistakes.
      Fortunately, this time it was not like that.
    </p>

    <p>
      The most outstanding thing for me was a realization, that with the right
      process in place and the right people, it is very possible, to work
      efficiently as a group of developers, <b>without</b> a manager or an
      official team leader. Our team was proof that it is possible to create a
      team, which can self-organize its work. In my opinion, it was possible
      mainly thanks to our Scrum Master (who off-loaded us in many ways from
      organizational tasks, which however was not our supervisor).
    </p>

    <p>
      What's the point of that, you may ask? Personally, it was making a huge
      difference for me knowing that STXNext and its client believed in us and
      trusted us, that we are capable of organizing our work on our own. I
      believe thanks to that everyone in the team felt more empowered and cared
      about the outcome even more.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
  </div>
</template>

<script setup lang="ts">
import { CoverImage } from "@/components";
import type { IProject, ITestimonial } from "@/types";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();
</script>
