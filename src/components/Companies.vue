<template>
  <section class="section-proof section bg-white py-5 companies">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-5">
        Great Companies I've Worked with
      </h3>
      <div class="logos row mb-5">
        <div
          v-for="company of companies"
          :key="company.name"
          class="logo px-3 col-6 col-md-4 col-lg-2 me-0 px-md-5 px-lg-4"
        >
          <a class="logo-link" :href="company.url" target="_blank">
            <img
              class="grayscale img-fluid svg-ie-fix"
              :src="getAsset(`@/images/${company.logo}`)"
              :title="company.name"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useAssets, useDB } from "@/composables";

const { getAsset } = useAssets();
const { companies } = useDB();
</script>
