<template>
  <footer class="footer text-light text-center">
    <HireMeFooter />
    <small class="copyright my-2"
      >Built with Vue.js 3 & Bootstrap 5. © {{ new Date().getFullYear() }}
      {{ fullName }}. All rights reserverd.</small
    >
  </footer>
</template>
<script setup lang="ts">
import { useMe } from "@/composables";
import HireMeFooter from "./HireMeFooter.vue";
const { fullName } = useMe();
</script>
