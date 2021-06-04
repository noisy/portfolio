<template>
  <div class="container">
    <div class="project-cards row mb-5 isotope">
      <project-thumbnail
        class="isotope-item"
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, PropType } from "vue";
import IProject from "@/types/IProject";
import ProjectThumbnail from "./ProjectThumbnail.vue";

import { setupIsotopeFilters } from "@/libs/isotope-custom";

import { defineComponent } from "vue";
export default defineComponent({
  name: "ProjectsGrid",
  components: { ProjectThumbnail },
  props: {
    projects: {
      required: true,
      type: Array as PropType<IProject[]>,
    },
  },
  setup() {
    onMounted(setupIsotopeFilters);
  },
});
</script>
