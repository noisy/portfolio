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
import { PropType, defineComponent, onMounted } from "vue";
import ProjectThumbnail from "./ProjectThumbnail.vue";
import { setupIsotopeFilters } from "@/libs/isotope-custom";
import { IProject } from "@/types";

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
    onMounted(() => setupIsotopeFilters());
  },
});
</script>
