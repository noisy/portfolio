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
      build was time-consuming and did not ensure success. In addition, new
      accounts had to be created daily (local and network) so the console did
      not accidentally keep some outdated settings.
    </p>
    <p>
      Our PS3 Devkits had very limited debug options. Primary tools like video
      capturing were unavailable, and we had to do this in a 'primitive way'
      with a smartphone or camera. Playstation 3 has always been treated as a
      necessary evil.
    </p>

    <h4 class="section-subtitle">Semi-open worlds</h4>
    <p>
      Dead Island consists of several acts in which players navigate through
      semi-open worlds. It means there were many places on the game map which
      players could accidentally visit and encounter a bug, i.e., textures of
      the environment were missing, or sometimes there were even holes through
      which it was possible to fall out of the map. In addition, because of this
      large area, it was possible to drive vehicles all over the island, giving
      even more problems. Efficient management of such semi-open worlds and
      bug-watching is much more complex than dividing the game into corridor
      stages.
    </p>

    <h4 class="section-subtitle">Escort missions</h4>
    <p></p>

    <h4 class="section-subtitle">Multiplayer cooperation</h4>
    <p></p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
    <p></p>
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
