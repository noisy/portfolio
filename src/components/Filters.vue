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

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IFilter, allFilterTag } from "@/types";

export default defineComponent({
  name: "Filters",
  props: {
    name: {
      type: String,
      required: true,
    },
    filters: {
      type: Object as PropType<IFilter[]>,
      required: true,
    },
  },
  setup(props) {
    return {
      nonAllFilters: props.filters.filter(
        (f: { tag: string }) => f.tag !== "*"
      ),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      allFilterName: props.filters.find((f) => f.tag === allFilterTag)!.name,
      allFilterTag,
    };
  },
});
</script>
