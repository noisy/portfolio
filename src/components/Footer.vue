<template>
  <footer class="footer text-light text-center">
    <HireMeFooter />
    <small class="copyright my-2"
      >Built with Vue.js 3 & Bootstrap 5. ©
      {{ new Date().getFullYear() }} Krzysztof Szumny. All rights
      reserverd.</small
    >
  </footer>
</template>
<script setup lang="ts">
import HireMeFooter from "./HireMeFooter.vue";
</script>
