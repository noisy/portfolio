<template>
  <section class="skills-section section py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-3">
        Skills Overview
      </h3>
      <div class="section-intro mx-auto text-center mb-5 text-secondary"></div>

      <div class="skills-blocks mx-auto pt-5">
        <div class="row">
          <SkillsBlock
            v-for="group of skillsGroups"
            :key="group.name"
            :group-name="group.name"
            :skills="group.skills"
            :icon="group.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDB } from "@/composables";
import SkillsBlock from "./SkillsBlock.vue";

const { skillsGroups } = useDB();
</script>
