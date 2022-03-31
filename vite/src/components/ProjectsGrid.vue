<template>
  <div class="container">
    <div class="project-cards row mb-5 isotope">
      <project-thumbnail
        v-for="project in projects"
        :key="project.slug"
        class="isotope-item"
        :project="project"
      />
    </div>
  </div>
</template>

<script lang="ts">
import type { IProject } from "@/types";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import ProjectThumbnail from "./ProjectThumbnail.vue";

export default defineComponent({
  name: "ProjectsGrid",
  components: { ProjectThumbnail },
  props: {
    projects: {
      required: true,
      type: Array as PropType<IProject[]>,
    },
  },
});
</script>
