<template>
  <keep-alive>
    <Navigation />
  </keep-alive>
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import { Footer, Navigation } from "@/components";
import { useFavicon } from "@/composables";
const { animateFavicon } = useFavicon();
animateFavicon();
</script>

<style lang="scss">
@import "./styles/variables.scss";
@import "./styles/theme-1.scss";
</style>
