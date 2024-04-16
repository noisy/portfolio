<template>
  <aside class="project-sidebar">
    <div class="project-sidebar-inner bg-white mb-5 mb-lg-0 p-2 p-xl-4">
      <div class="sidebar-row mb-2 mb-xl-5">
        <h3 class="sidebar-title mb-2 mb-xl-4">Project Info</h3>
        <ul class="list-unstyled ps-2">
          <li
            v-if="project.companyName || project.companyUrl"
            class="mb-2 mb-xl-4"
          >
            <font-awesome-icon
              icon="building"
              class="me-3 text-primary"
              transform="grow-6 down-2"
            />
            <strong>Company: </strong>
            <a v-if="project.companyUrl" :href="project.companyUrl">{{
              project.companyName || project.companyUrl
            }}</a>
            <span v-if="project.companyName && !project.companyUrl">
              {{ project.companyName }}
            </span>
          </li>
          <li
            v-if="project.url || project.urlName || project.archivedUrl"
            class="mb-2 mb-xl-4"
          >
            <font-awesome-icon
              icon="external-link-alt"
              class="me-3 text-primary"
              transform="grow-6 down-2"
            />
            <strong>Site Link: </strong>
            <a
              v-if="project.url || project.archivedUrl"
              :href="project.archivedUrl || project.url"
              >{{ project.urlName || project.archivedUrl || project.url }}</a
            >
            <span v-if="project.archivedUrl"> (archived)</span>
            <span
              v-if="project.urlName && !project.url && !project.archivedUrl"
            >
              {{ project.urlName }}
            </span>
          </li>
          <li class="mb-2 mb-xl-4">
            <font-awesome-icon
              icon="wrench"
              class="me-3 text-primary"
              transform="grow-6 down-2"
            />
            <strong>Type:</strong> {{ project.type }}
          </li>
          <li v-if="project.repositoryUrl" class="mb-2 mb-xl-4">
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="me-3 text-primary"
              transform="grow-6 down-2"
            />
            <strong>Source Code: </strong>
            <a :href="project.repositoryUrl">{{
              project.repositoryName || project.repositoryUrl
            }}</a>
          </li>
        </ul>
      </div>
      <div class="sidebar-row">
        <h3 class="sidebar-title mb-3">Technologies Used</h3>
        <div class="webdev-icons row mb-1 mb-xl-5 justify-content-center">
          <div
            v-for="iconName in project.technologies"
            :key="iconName"
            class="webdev-icon col-2 col-xs-1 col-sm-1 col-lg-2 me-0 mb-2"
          >
            <img
              class="img-fluid"
              :src="getAsset(`@/images/webdev-icons/${iconName}.svg`)"
              :title="iconName"
            />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useAssets } from "@/composables";
import type { IProject } from "@/types";

const { getAsset } = useAssets();
defineProps<{ project: IProject }>();
</script>
