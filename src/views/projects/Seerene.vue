<template>
  <CoverImage :url="`/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>

    Seerene describes own product as:

    <blockquote class="blockquote my-4 bg-white shadow-sm">
      <i class="mt-3 ms-3 quote-icon fas fa-quote-left fa-lg text-primary"></i>
      <p class="px-5 pb-4">
        Seerene’s Digital Boardroom is a software analytics and process mining
        technology that analyzes and visualizes the software development
        processes in your company. It reveals weaknesses and turns your
        organization into a well-oiled machine, delivering software efficiently,
        cost-effectively, quickly, and with the highest quality. Seerene
        provides decision-makers with the information needed to actively drive
        their organization towards 360° software excellence.
      </p>
    </blockquote>

    <p class="video-container">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/zk3_lOGBlp8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </p>

    <h3 class="section-title">My role in this project</h3>
    <p>
      I've worked on Seerene during my years at
      <a href="https://www.stxnext.com/">Software House STXnext</a>. It is a
      project of a German company of the same name. STXnext offered me the
      possibility to be a part of a small team of 3 developers, which goal was
      to show STXnext's ability to work on the development of this product, and
      thanks to that convince the client to build with STXNext a bigger team or
      two, with more programmers, QAs and scrum master.
    </p>

    <carousel :items-to-show="1" :wrap-around="true">
      <slide v-for="slide in [2, 1, 3]" :key="slide">
        <img
          class="d-block w-100"
          :src="`/images/projects/seerene/seerene-${slide}.png`"
          alt=""
        />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>

  <div class="section-row">
    <h3 class="section-title">Chalanges</h3>
    <h4 class="section-title">New frontend framework</h4>
    <p>
      In 2015, I had a lot of experience with Django&amp;Python, only some
      experience with jQuery and BackboneJS, but no prior experience with
      Angular JS. That was a challenge of its own for me.
    </p>
    <p>
      Fortunately, instead of focusing just on things which I knew better -
      backend, we were able to organize our work in a way, which give everyone
      in a team possibility to contribute in areas where everyone felt the
      strongest... but leaving the opportunity to contribute smaller things also
      in other areas. That helped everyone in the team learn a lot of new
      things.
    </p>

    <h4 class="section-title">
      Bootstrapping new team for a client, new code base, no know-how
    </h4>
    <p>
      Because we formed a new independent team, at the beginning we started with
      a very narrow understanding of the codebase, with limited know-how about
      the whole project. We had contact with all in-house developers and a
      Product Owner from Seerene, however as you can imagine it was more
      difficult, to learn about all nitty-gritty details when without having
      people with the knowledge inside the same room. To deal with that we
      needed to spend a lot of time on talks via slack or on video calls.
    </p>
    <p>
      The important part was to focus on asking the right questions, to learn
      things that were truly necessary to develop scoped tasks.
    </p>
    <p>
      I believe the key to doing well all of that was in really good Planning
      and Estimation meetings, during which we together dissected all problems
      while trying to identify risks.
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
import { PropType, defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { CoverImage, Testimonial } from "@/components";
import { useDB } from "@/composables";
import "vue3-carousel/dist/carousel.css";
import { IProject, ITestimonial } from "@/types";

export default defineComponent({
  name: "Seerene",
  components: {
    CoverImage,
    Carousel,
    Slide,
    Testimonial,
    Pagination,
    Navigation,
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

.carousel /deep/ button {
  /* Colors */
  --carousel-color-primary: #41a4f5;
  --carousel-color-secondary: #0a71c6;
  --carousel-color-white: #ffffff;

  /* Navigation */
  --carousel-nav-width: 30px;
}
</style>
