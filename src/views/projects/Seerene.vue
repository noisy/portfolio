<template>
  <CoverImage :url="`/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>

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
    <p>
      I've worked on this project during my years at
      <a href="https://www.stxnext.com/">STXnext</a>. It is a project of a
      German company of the same name. STXnext offered me the possibility to be
      a part of a small team of 3 developers, which goal was to show STXnext's
      ability to work on the development of this product, and thanks to that
      convince the client to build with STXNext a bigger team or two, with more
      programmers, QAs and scrum master.
    </p>

    <div class="mb-5">
      <a class="btn btn-primary" href="https://www.seerene.com/" target="_blank"
        ><i class="fas fa-external-link-alt me-2"></i> View Live Site</a
      >
    </div>

    <div class="alert bg-white shadow-sm mb-4">
      This template
      <strong>includes the original Sketch source file</strong> for making the
      browser window in the carousel. The screenshots were taken from the
      <a
        class="text-link"
        href="https://themes.3rdwavemedia.com/bootstrap-templates/product/appify-bootstrap-4-admin-template-for-app-developers/"
        target="_blank"
        >Bootstrap 4 admin template Appify</a
      >.
    </div>

    <div
      id="project-carousel"
      class="theme-carousel carousel slide mb-5"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#project-carousel"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-bs-target="#project-carousel" data-slide-to="1"></li>
        <li data-bs-target="#project-carousel" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="/images/projects/project-slide-1.png"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/images/projects/project-slide-2.png"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/images/projects/project-slide-3.png"
            alt=""
          />
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#project-carousel"
        role="button"
        data-slide="prev"
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 150 258"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="arrow-left" fill="#FFFFFF" fill-rule="nonzero">
              <path
                id="Shape"
                d="M4.1,120.5 L121.9,4.5 C126.6,-0.2 134.2,-0.2 138.9,4.5 L146,11.6 C150.7,16.3 150.7,23.9 146,28.6 L43.7,129 L145.9,229.4 C150.6,234.1 150.6,241.7 145.9,246.4 L138.8,253.5 C134.1,258.2 126.5,258.2 121.8,253.5 L4,137.5 C-0.6,132.8 -0.6,125.2 4.1,120.5 Z"
              ></path>
            </g>
          </g>
        </svg>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#project-carousel"
        role="button"
        data-slide="next"
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 150 258"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="arrow-right" fill="#FFFFFF" fill-rule="nonzero">
              <path
                id="Shape"
                d="M145.9,137.5 L28.1,253.5 C23.4,258.2 15.8,258.2 11.1,253.5 L4,246.4 C-0.7,241.7 -0.7,234.1 4,229.4 L106.3,129 L4.1,28.6 C-0.6,23.9 -0.6,16.3 4.1,11.6 L11.2,4.5 C15.9,-0.2 23.5,-0.2 28.2,4.5 L146,120.5 C150.6,125.2 150.6,132.8 145.9,137.5 Z"
              ></path>
            </g>
          </g>
        </svg>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--//theme-carousel-->
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
      efficiently as a group of developers, **without** a manager or an official
      team leader. Our team was proof that it is possible to create a team,
      which can self-organize its work. In my opinion, it was possible mainly
      thanks to our Scrum Master (who off-loaded us in many ways from
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
    <p>
      When I've started working on this project, there were just 3 developers
      from STXNext working on that. I believe the work of this initial team was
      crucial in a process of building a strong and long-lasting relationship of
      STXNext and its client, which before I left... resulted in the existence
      of 3 big teams, with 5 devs &amp; 2 QAs each, with support of 2 scrum
      masters and 2 Product Owners.
    </p>
  </div>

  <OtherProjectCaseStudies :projects="projects" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CoverImage, OtherProjectCaseStudies } from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "Seerene",
  components: {
    CoverImage,
    OtherProjectCaseStudies,
  },
  setup() {
    const otherCaseStudies = ["opera-mobile"];
    const { projects } = useDB();
    return {
      project: projects.find((p) => p.slug == "seerene"),
      projects: projects.filter((p) => otherCaseStudies.includes(p.slug)),
      testimonials: [],
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
