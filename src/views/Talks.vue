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
    <Filters name="talk-filters" v-model="talkFilters" />
    <Filters name="language-filters" v-model="languageFilters" />
    <div class="container isotope">
      <div class="container position-relative">
        <Talk
          v-for="talk in filteredTalks"
          :key="talk.id"
          class="isotope-item"
          :talk="talk"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Filters, PageHeader, Talk } from "@/components";
import { useTalks } from "@/composables";
import { allFilterTag } from "@/types";
import { computed } from "vue";

const { talks, talkFilters, languageFilters } = useTalks();

const filteredTalks = computed(() => {
  const result = talks.map((talk) => {
    const talkTags = talk.filterTags.map((tag) => tag.toLowerCase());
    const talkFilter = talkFilters.value.find(
      (filter) => filter.isActive && filter.tag !== allFilterTag
    );
    const languageFilter = languageFilters.value.find(
      (filter) => filter.isActive && filter.tag !== allFilterTag
    );
    const isActive =
      (talkFilter ? talkTags.includes(talkFilter.tag) : true) &&
      (languageFilter ? talk.language == languageFilter.tag : true);
    return { ...talk, isActive };
  });
  return result;
});
</script>
