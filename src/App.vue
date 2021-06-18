<template>
  <keep-alive>
    <Navigation />
  </keep-alive>
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Footer, Navigation } from "@/components";

export default defineComponent({
  name: "App",
  components: {
    Footer,
    Navigation,
  },
});
</script>
<style lang="scss">
@import "./styles/theme-1.scss";
</style>
