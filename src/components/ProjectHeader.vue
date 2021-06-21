<template>
  <PageHeader :title="project.name">
    <template #tagline>
      {{ project.summary }}
    </template>
    <template #logo>
      <div
        class="
          page-heading-logo
          font-weight-bold
          position-absolute
          mt-4 mt-md-0
          py-3
        "
      >
        <img
          class="client-logo white"
          :src="`/images/logos/${project.thumbnailLogo}`"
        />
        <!-- <img
          class="client-logo color"
          :src="`/images/logos/${project.thumbnailLogo}`"
        /> -->
      </div>
    </template>
  </PageHeader>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { PageHeader } from "@/components";
import { IProject } from "@/types";

export default defineComponent({
  name: "ProjectHeader",
  components: { PageHeader },
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true,
    },
  },
});
</script>
<style scoped lang="scss">
// .client-logo.color {
//   opacity: 0;
//   position: relative;
//   transition: all 4s ease-in-out;
// }
.page-heading-logo:hover {
  background-color: white;
  transition: all 0.4s ease-out;
  .client-logo {
    filter: brightness(0) invert(0);
    transition: filter 0.4s ease-out;
    filter: none;
    transition: filter 0.4s ease-out;
    // transition-delay: 0.4s;
  }
}
</style>
