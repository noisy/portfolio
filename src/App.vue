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
import { useDB } from "@/composables";
const { isUnderConstruction } = useDB();
</script>

<style lang="scss">
@import "./styles/variables.scss";
@import "./styles/theme-6.scss";
</style>
