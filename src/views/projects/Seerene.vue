<template>
  <div class="section-row">
    <h3 class="section-title">Project Background</h3>

    Seerene describes their product as:

    <Quote>
      Seerene’s Digital Boardroom is a software analytics and process mining
      technology that analyzes and visualizes the software development processes
      in your company. It reveals weaknesses and turns your organization into a
      well-oiled machine, delivering software efficiently, cost-effectively,
      quickly, and with the highest quality. Seerene provides decision-makers
      with the information needed to actively drive their organization towards
      360° software excellence.
    </Quote>

    <p class="video-container">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/6dtqTChsfN0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </p>

    <h3 class="section-title">My Role in This Project</h3>
    <p>
      I've worked on Seerene during my years at
      <a href="https://www.stxnext.com/">Software House STXnext</a>. It is a
      project of a German company of the same name. STXnext offered me the
      possibility to be a part of a small team of 3 developers, which goal was
      to show STXnext's ability to work on the development of this product, and
      thanks to that, convince the client to build with STXNext a bigger team or
      two, with more programmers, QAs and scrum master.
    </p>

    <Carousel :items-to-show="1" :paths="imagesPaths" />
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <h4 class="section-title">New Frontend Framework</h4>
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
      Bootstrapping New Team for a Client, New Code Base, No Know-How
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
      Lack of Infrastructure on Our End; Custom CI Build-System
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

    <h4 class="section-title">Optimizing the Speed of Database Queries</h4>
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
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
    <p>
      When I've started working on this project, there were just 3 developers
      from STXNext working on that. I believe the work of this initial team was
      crucial in a process of building a strong and long-lasting relationship of
      STXNext and its client, which before I left... resulted in the existence
      of 2 big teams, with 5 devs &amp; 2 QAs, Scrum Master and Pruduct Owner in
      each.
    </p>
  </div>
</template>

<script lang="ts">
import { Carousel, Quote, Testimonial } from "@/components";
import { useDB, useProject } from "@/composables";
import type { IProject, ITestimonial } from "@/types";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Seerene",
  components: {
    Carousel,
    Testimonial,
    Quote,
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
      imagesPaths: getImagesPaths(props.project, 3),
    };
  },
});
</script>
<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
