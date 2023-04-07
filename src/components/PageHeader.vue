<template>
  <div class="header-intro theme-bg-primary text-white py-5">
    <div class="container position-relative">
      <h2 class="page-heading col-md-8 mb-3">{{ title }}</h2>
      <div class="page-heading-tagline"><slot name="tagline" /></div>
      <slot name="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
