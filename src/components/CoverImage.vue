<template>
  <div class="mb-5">
    <img class="img-fluid w-100" :src="getAsset(url)" alt="" />
  </div>
</template>

<script setup lang="ts">
import { useAssets } from "@/composables";

const { getAsset } = useAssets();
defineProps<{ url: string }>();
</script>
