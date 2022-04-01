<template>
  <HireMeFooter />
  <footer class="footer text-light text-center py-2">
    <small class="copyright"
      >Built with Vue.js 3 & Bootstrap 5. ©
      {{ new Date().getFullYear() }} Krzysztof Szumny. All rights
      reserverd.</small
    >
  </footer>
</template>
<script setup lang="ts">
import HireMeFooter from "./HireMeFooter.vue";
</script>
