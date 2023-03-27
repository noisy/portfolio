<template>
  <CoverImage :url="`@/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <p>Information from Wikipedia:</p>
    <quote>
      Dead Island is a 2011 action role-playing game developed by Techland and
      published by Deep Silver. Released for Linux, Microsoft Windows, OS X,
      PlayStation 3 and Xbox 360, the game is centered on the challenge of
      surviving a zombie-infested open world with a major emphasis on melee
      combat. The plot focuses on four playable survivors trying to survive and
      escape off the fictional island of Banoi.
    </quote>
    <p class="video-container">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/ialZcLaI17Y"
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
      main focus of our work. Every day through our QA Leader, we received
      information about new implementations or changes in the project to be
      tested on PC, PlayStation 3 and Xbox 360.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <h4 class="section-subtitle">Playstation 3</h4>
    <p>
      Console from Sony was not only more challenging for developers but also
      for testers. Nightly builds sometimes didn't build correctly, so in the
      morning, no one was sure if it would work. The initial verification of the
      build was time-consuming and did not ensure success. Playstation 3 has
      always been treated as a necessary evil.
    </p>
    <p>
      Fortunately, our client and our team were long-term oriented, so we were
      embracing opportunities to learn new things if particular tasks were not
      critical. Everyone in a group was contributing the most in areas where he
      felt the strongest, but we created a culture of working on things outside
      of our area of expertise. That helped everyone in the team learn a lot of
      new things.
    </p>

    <h4 class="section-subtitle">Escort missions</h4>
    <p></p>

    <h4 class="section-subtitle">Semi open world</h4>
    <p></p>

    <h4 class="section-subtitle">Multiplayer cooperation</h4>
    <p></p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
    <p>
      Often the biggest lessons you learn happens after some big mistakes.
      Fortunately, this time it was not like that.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
  </div>
</template>

<script setup lang="ts">
import { CoverImage, Quote } from "@/components";
import type { IProject, ITestimonial } from "@/types";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();
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
