<template>
  <PageHeader :title="project.name">
    <template #tagline>
      {{ project.summary }}
    </template>
    <template #logo>
      <div
        class="page-heading-logo font-weight-bold position-absolute mt-4 mt-md-0 py-3"
      >
        <img
          class="client-logo white"
          :src="getAsset(`@/images/logos/${project.thumbnailLogo}`)"
        />
        <!-- <img
          class="client-logo color"
          :src="`@/images/logos/${project.thumbnailLogo}`"
        /> -->
      </div>
    </template>
  </PageHeader>
</template>

<script lang="ts">
import { PageHeader } from "@/components";
import { useAssets } from "@/composables";
import type { IProject } from "@/types";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectHeader",
  components: { PageHeader },
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true,
    },
  },
  setup() {
    const { getAsset } = useAssets();
    return { getAsset };
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
