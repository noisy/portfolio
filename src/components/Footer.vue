<template>
  <HireMeFooter />
  <footer class="footer text-light text-center py-2">
    <small class="copyright"
      >Built with Vue.js 3 & Bootstrap 5. © {{ currentYear }} Krzysztof Szumny.
      All rights reserverd.</small
    >
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HireMeFooter from "./HireMeFooter.vue";

export default defineComponent({
  name: "Footer",
  components: { HireMeFooter },
  data: () => ({
    currentYear: new Date().getFullYear(),
  }),
});
</script>
