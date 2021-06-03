<template>
  <!-- <PageHeader title="Projects"
    >In-depth Case Studies to show you what I can offer and how I
    work</PageHeader
  >
  <Projects /> -->
  <HireMeFooter />
</template>

<script lang="ts">
import { useDB } from "@/composables";
import { defineComponent } from "vue";
import {
  HireMeFooter,
  // PageHeader,
  // Projects
} from "@/components";
export default defineComponent({
  name: "Projects",
  components: {
    // PageHeader,
    // Projects,
    HireMeFooter,
  },
  setup() {
    const { projects } = useDB();
    return { projects };
  },
});
</script>
