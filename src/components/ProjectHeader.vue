<template>
<div class="row">
  <PageHeader :title="project.name">
    <template #tagline>
    <div class="col-12 col-md-8 col-lg-10 col-xl-12">
      {{ project.summary }}
      </div>
    </template>
    <template #logo>
    <div class="col-12 mx-auto">
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
      </div>
    </template>
  </PageHeader>
  </div>
</template>

<script setup lang="ts">
import { PageHeader } from "@/components";
import { useAssets } from "@/composables";
import type { IProject } from "@/types";

const { getAsset } = useAssets();
defineProps<{ project: IProject }>();
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
