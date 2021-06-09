<template>
  <div class="col-12 col-lg-4" :class="project.tags">
    <div class="card rounded-0 border-0 shadow-sm mb-5">
      <div class="card-img-container position-relative">
        <img
          class="card-img-top rounded-0"
          :src="`/images/projects/${project.thumbnail}`"
          alt=""
        />
        <div class="card-img-overlay overlay-logo text-center">
          <div class="project-logo">
            <img
              class="img-fluid w-50 white"
              :src="`/images/logos/${project.thumbnailLogo}`"
            />
          </div>
        </div>
        <router-link
          class="card-img-overlay overlay-content text-start p-lg-4"
          :to="{ name: `project-${project.slug}` }"
        >
          <h5 class="card-title font-weight-bold">
            {{ project.summaryTitle }}
          </h5>
          <p class="card-text">{{ project.summary }}</p>
        </router-link>
      </div>
      <div class="card-body pb-0">
        <h4 class="card-title text-truncate text-center mb-0">
          <router-link
            lass="text-link"
            :to="{ name: `project-${project.slug}` }"
          >
            {{ project.name }}
          </router-link>
        </h4>
      </div>

      <div class="card-footer border-0 text-center bg-white pb-4">
        <ul class="list-inline mb-0 mx-auto">
          <li
            v-for="badge in project.badges"
            :key="badge"
            class="list-inline-item"
          >
            <span class="badge bg-secondary badge-pill">{{ badge }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IProject } from "@/types";

export default defineComponent({
  name: "ProjectThumbnail",
  props: {
    project: {
      required: true,
      type: Object as PropType<IProject>,
    },
  },
});
</script>
