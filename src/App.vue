<template>
  <Navigation />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
