<template>
  <PageHeader title="Talks">
    <template #tagline>
      Want me to talk at your event?
      <router-link class="link-on-bg text-link" to="/contact"
        >Get in touch</router-link
      >
    </template>
  </PageHeader>
  <section class="section pt-5 px-3 px-lg-0">
    <div class="container">
      <Talk v-for="talk in talks" :key="talk.id" :talk="talk" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageHeader, Talk } from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "Talks",
  components: {
    PageHeader,
    Talk,
  },
  setup() {
    const { talks } = useDB();
    return { talks };
  },
});
</script>
