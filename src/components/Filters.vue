<template>
  <div class="text-center">
    <ul :id="name" class="filters mb-5 mx-auto ps-0">
      <li class="type active" data-filter="*">All</li>
      <li
        v-for="{ tag, name: filterName } in filters"
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "Filters",
  props: {
    name: {
      type: String,
      required: true,
    },
    filters: {
      type: Object,
      required: true,
    },
  },
});
</script>
