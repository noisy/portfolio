<template>
  <div class="text-center">
    <ul :id="name" class="filters mb-5 mx-auto ps-0">
      <li
        v-for="{ tag, name: filterName, isActive } in modelValue"
        :key="tag"
        class="type"
        :class="{ active: isActive }"
        :data-filter="tag"
        @click="updateFilter(tag)"
      >
        {{ filterName }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IFilter } from "@/types";
const props = defineProps<{ name: string; modelValue: IFilter[] }>();
const emit = defineEmits(["update:modelValue"]);

function updateFilter(tag: string): void {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filters = props.modelValue.map(({ isActive: _, ...filter }) => ({
    ...filter,
    isActive: filter.tag === tag,
  }));
  emit("update:modelValue", filters);
}
</script>
