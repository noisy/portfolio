<template>
  <div class="row mb-5 flex-column flex-lg-row bg-white shadow-sm">
    <div class="col-12 col-auto talk-media-holder ratio ratio-16x9 me-md-3">
      <iframe
        v-if="source == 'youtube'"
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/' + id"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>

    <div class="col p-4">
      <h4>{{ title }}</h4>
      <ul class="talk-meta list-inline mb-2">
        <li class="list-inline-item me-3">
          <i class="far fa-clock me-2"></i>{{ date }}
        </li>
        <li class="list-inline-item" style="text-transform: capitalize">
          <i
            class="fas me-2"
            :class="{
              'fa-headphones': type == 'podcast',
              'fa-video': type == 'video',
            }"
          >
          </i>
          {{ type }}
        </li>
      </ul>
      <div class="talk-content">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Talk",
  props: ["source", "id", "type", "title", "description", "date"],
});
</script>
