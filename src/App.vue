<template>
  <UnderConstruction v-if="isUnderConstruction" />
  <keep-alive>
    <Navigation />
  </keep-alive>
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import { Footer, Navigation, UnderConstruction } from "@/components";
import { useDB, useFavicon } from "@/composables";
const { animateFavicon } = useFavicon();
const { isUnderConstruction } = useDB();
animateFavicon();
</script>

<style lang="scss">
@import "./styles/variables.scss";
@import "./styles/theme-6.scss";
</style>
