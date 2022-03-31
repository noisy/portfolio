<template>
  <div class="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
    <div
      class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative"
    >
      <h4 class="skills-cat text-center mb-3 mt-5">{{ groupName }}</h4>
      <div
        class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center"
      >
        <img class="skills-icon" :src="getAsset(icon)" />
      </div>
      <ul class="skills-list list-unstyled text-secondary">
        <li v-for="skill in skills" :key="skill" class="mb-2">
          <font-awesome-icon icon="check" class="me-2 text-primary" />{{
            skill
          }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { useAssets } from "@/composables";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillsBlock",
  props: {
    groupName: {
      required: true,
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
    skills: {
      required: true,
      type: Array as PropType<string[]>,
    },
  },
  setup() {
    const { getAsset } = useAssets();
    return { getAsset };
  },
});
</script>
