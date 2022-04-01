<template>
  <div class="header-intro theme-bg-primary text-white py-5">
    <div class="container position-relative">
      <div class="row g-2 g-lg-3">
        <div class="col-12 col-md-auto">
          <img
            class="profile-medium d-inline-block rounded-circle me-md-4 align-self-center mb-2 mb-lg-0"
            src="@/images/profile.png"
            alt=""
          />
        </div>
        <div class="col align-self-center">
          <h2 class="page-heading mb-2">Krzysztof Szumny's Blog</h2>
          <div class="page-heading-tagline mb-3">
            I write about web development and life as a developer.
            <br class="d-lg-block d-none" />You can follow me via the various
            channels below:
          </div>
          <ul class="social-list-square list-inline mb-0">
            <li
              v-if="links.twitterProfile"
              class="list-inline-item mb-3 mb-lg-0"
            >
              <a :href="links.twitterProfile">
                <font-awesome-icon
                  :icon="['fab', 'twitter']"
                  class="text-white"
                />
              </a>
            </li>

            <li
              v-if="links.linkedinProfile"
              class="list-inline-item mb-3 mb-lg-0"
            >
              <a :href="links.linkedinProfile">
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  class="text-white"
                />
              </a>
            </li>

            <li
              v-if="links.githubProfile"
              class="list-inline-item mb-3 mb-lg-0"
            >
              <a :href="links.githubProfile">
                <font-awesome-icon
                  :icon="['fab', 'github']"
                  class="text-white"
                />
              </a>
            </li>

            <li
              v-if="links.stackOverflowProfile"
              class="list-inline-item mb-3 mb-lg-0"
            >
              <a :href="links.stackOverflowProfile">
                <font-awesome-icon
                  :icon="['fab', 'stack-overflow']"
                  class="text-white"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDB } from "@/composables";
const { links } = useDB();
</script>
