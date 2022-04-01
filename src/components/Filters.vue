<template>
  <div class="text-center">
    <ul :id="name" class="filters mb-5 mx-auto ps-0">
      <li class="type active" :data-filter="allFilterTag">
        {{ allFilterName }}
      </li>
      <li
        v-for="{ tag, name: filterName } in nonAllFilters"
        :key="tag"
        class="type"
        :data-filter="tag"
      >
        {{ filterName }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IFilter } from "@/types";
import { allFilterTag } from "@/types";

const props = defineProps<{ name: string; filters: IFilter[] }>();
const nonAllFilters = props.filters.filter(
  (f: { tag: string }) => f.tag !== "*"
);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const allFilterName = props.filters.find((f) => f.tag === allFilterTag)!.name;
</script>
