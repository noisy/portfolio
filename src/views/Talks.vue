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
    <FilterableList>
      <template #filters>
        <Filters name="talk-filters" v-model="talkFilters" />
        <Filters name="language-filters" v-model="languageFilters" />
      </template>
      <template #items>
        <div class="container position-relative">
          <Talk
            v-for="talk in filteredTalksSortedByDate"
            :key="talk.id"
            class="item"
            :class="{ hidden: talk.hidden }"
            :talk="talk"
          />
        </div>
      </template>
    </FilterableList>
  </section>
</template>

<script setup lang="ts">
import { FilterableList, Filters, PageHeader, Talk } from "@/components";
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
    const show =
      (talkFilter ? talkTags.includes(talkFilter.tag) : true) &&
      (languageFilter ? talk.language == languageFilter.tag : true);
    return { ...talk, hidden: !show };
  });
  return result;
});

const filteredTalksSortedByDate = computed(() => {
  return filteredTalks.value
    .slice(0)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});
</script>
