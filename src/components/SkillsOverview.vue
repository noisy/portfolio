<template>
  <section class="skills-section section py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-3">
        Skills Overview
      </h3>
      <div class="section-intro mx-auto text-center mb-5 text-secondary">
        I have more than 12 years' experience building rich web applications &
        sophisticated applications for clients all over the world. Below is a
        quick overview of my main technical skill sets and tools I use. Want to
        find out more about my experience?
        <router-link class="text-link" :to="{ name: 'resume' }"
          >Check out my online resume</router-link
        >.
      </div>

      <div class="skills-blocks mx-auto pt-5">
        <div class="row">
          <SkillsBlock
            group-name="Frontend"
            :skills="[
              'Vue.js/Angular/React',
              'Javascript/Typescript',
              'HTML/CSS/SASS/LESS',
              'Bootstrap',
            ]"
            icon="/images/frontend-icon.svg"
          />

          <SkillsBlock
            group-name="Backend"
            :skills="[
              'Python/Django',
              'C/C++',
              'Java',
              'Node.js',
              'PostgresSQL/MySQL',
            ]"
            icon="/images/backend-icon.png"
          />

          <SkillsBlock
            group-name="Other"
            :skills="['DevOps', 'Unit Testing', 'Docker', 'Stripe']"
            icon="/images/other-skills-icon.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillsBlock from "./SkillsBlock.vue";

export default defineComponent({
  name: "SkillsOverview",
  components: {
    SkillsBlock,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
