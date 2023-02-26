<template>
  <slot name="filters"></slot>
  <slot name="items"></slot>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const showAnimationEnabled = ref<boolean>(false);

onMounted(() => {
  showAnimationEnabled.value = true;
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
<style lang="scss">
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
    padding: 0;
    overflow: hidden;
  }
}

@keyframes show-item {
  0% {
    opacity: 0;
    max-height: 0;
    margin: 0;
    padding: 0;
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
