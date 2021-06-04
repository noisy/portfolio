<template>
  <PageHeader title="Talks">
    Want me to talk at your event?
    <router-link class="link-on-bg text-link" to="/contact"
      >Get in touch</router-link
    >
  </PageHeader>
  <section class="section pt-5 px-3 px-lg-0">
    <div class="container">
      <Talk
        v-for="talk in talks"
        :key="talk.id"
        :source="talk.source"
        :id="talk.id"
        :type="talk.type"
        :title="talk.title"
        :description="talk.description"
        :date="talk.date"
      />
    </div>
  </section>
  <HireMeFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageHeader, HireMeFooter, Talk } from "@/components";
import { useDB } from "@/composables";

export default defineComponent({
  name: "Talks",
  components: {
    PageHeader,
    HireMeFooter,
    Talk,
  },
  setup() {
    const { talks } = useDB();
    return { talks };
  },
});
</script>
