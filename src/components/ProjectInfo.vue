<template>
  <aside class="project-sidebar">
    <div class="project-sidebar-inner bg-white p-4">
      <div class="sidebar-row mb-5">
        <h3 class="sidebar-title mb-4">Project Info</h3>
        <ul class="list-unstyled ps-2">
          <li v-if="project.companyName" class="mb-4">
            <font-awesome-icon
              icon="building"
              class="me-3 text-primary"
              transform="grow-6 down-2"
            />
            <strong>Company:</strong> {{ project.companyName }}
          </li>
          <li class="mb-4">
            <font-awesome-icon
              icon="external-link-alt"
              class="me-3 text-primary"
              transform="grow-6 down-2"
            />
            <strong>Site Link: </strong>
            <a :href="project.archivedUrl || project.url">{{ project.url }}</a>
            <span v-if="project.archivedUrl"> (archived)</span>
          </li>
          <li class="mb-4">
            <font-awesome-icon
              icon="wrench"
              class="me-3 text-primary"
              transform="grow-6 down-2"
            />
            <strong>Type:</strong> {{ project.type }}
          </li>
          <li v-if="project.repositoryUrl">
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="me-3 text-primary"
              transform="grow-6 down-2"
            />
            <strong>Source Code: </strong>
            <a :href="project.repositoryUrl">{{ project.repositoryUrl }}</a>
          </li>
        </ul>
      </div>
      <div class="sidebar-row">
        <h3 class="sidebar-title mb-3">Technologies Used</h3>
        <div class="webdev-icons row mb-5 justify-content-center">
          <div
            v-for="iconName in project.technologies"
            :key="iconName"
            class="webdev-icon col-2 col-sm-1 col-lg-2 me-0 mb-4"
          >
            <img
              class="img-fluid"
              :src="`/images/webdev-icons/${iconName}.svg`"
              :title="iconName"
            />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IProject } from "@/types";

export default defineComponent({
  name: "ProjectInfo",
  props: {
    project: {
      required: true,
      type: Object as PropType<IProject>,
    },
  },
});
</script>
