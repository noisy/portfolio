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
          class="item"
          :class="{ hidden: !talk.isActive }"
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
import { computed, onMounted } from "vue";

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

onMounted(() => {
  setTimeout(updateItemHeights, 500);
  window.addEventListener("resize", updateItemHeights);
});

function updateItemHeights() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = document.querySelectorAll(".item") as unknown as any[];
  items.forEach((item) => {
    item.style.maxHeight = "none";

    if (item.offsetHeight > 0) {
      item.style.maxHeight = `${item.offsetHeight}px`;
    }
  });
}
</script>
<style lang="scss" scoped>
@keyframes hide-item {
  0% {
    opacity: 1;
    max-height: auto;
    margin-bottom: 50px;
  }
  100% {
    opacity: 0;
    scale: 0;
    max-height: 0;
    margin: 0;
    overflow: hidden;
  }
}

@keyframes show-item {
  0% {
    opacity: 0;
    max-height: 0;
    margin: 0;
    scale: 0;
    overflow: hidden;
  }
  100% {
    opacity: 1;
    max-height: auto;
    margin-bottom: 50px;
  }
}

.item {
  margin-bottom: 50px;
  transition: opacity 0.5s ease-in-out;
  animation: show-item 0.5s ease-in-out forwards;
}

.item.hidden {
  animation: hide-item 0.5s ease-in-out forwards;
}
</style>
