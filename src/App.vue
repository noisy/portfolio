<template>
  <keep-alive>
    <Navigation />
  </keep-alive>
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import { Footer, Navigation } from "@/components";
</script>

<style lang="scss">
@import "./styles/theme-1.scss";
</style>
