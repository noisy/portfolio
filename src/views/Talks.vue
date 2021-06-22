<template>
  <PageHeader title="Talks">
    <template #tagline>
      Want me to talk at your event?
      <router-link class="link-on-bg text-link" :to="{ name: 'contact' }"
        >Get in touch</router-link
      >
    </template>
  </PageHeader>
  <section class="section pt-5 px-3 px-lg-0">
    <Filters :filters="talkFilters" />
    <div class="container isotope">
      <div class="container position-relative">
        <Talk
          v-for="talk in talks"
          :key="talk.id"
          class="isotope-item"
          :talk="talk"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { Filters, PageHeader, Talk } from "@/components";
import { useDB } from "@/composables";
import { setupIsotopeFilters } from "@/libs/isotope-custom";

export default defineComponent({
  name: "Talks",
  components: {
    PageHeader,
    Talk,
    Filters,
  },
  setup() {
    const { talks, talkFilters } = useDB();
    onMounted(() => setupIsotopeFilters());
    return { talks, talkFilters };
  },
});
</script>
