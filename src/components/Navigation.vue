<template>
  <nav class="top-bar theme-bg-primary-darken">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark position-relative">
        <!-- <ul class="social-list list-inline mb-0">
          <li class="list-inline-item">
            <a class="text-white" href="#">
              <font-awesome-icon :icon="['fab', 'twitter']" class="fa-fw" />
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="text-white"
              href="https://www.linkedin.com/in/krzysztofszumny/"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-fw" />
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-white" href="https://github.com/noisy/">
              <font-awesome-icon :icon="['fab', 'github-alt']" class="fa-fw" />
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="text-white"
              href="https://stackoverflow.com/users/338581/noisy"
            >
              <font-awesome-icon
                :icon="['fab', 'stack-overflow']"
                class="fa-fw"
              />
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-white" href="#">
              <font-awesome-icon :icon="['fab', 'codepen']" class="fa-fw" />
            </a>
          </li>
        </ul> -->
        <!--//social-list-->

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          id="navigation"
          class="navbar-collapse text-uppercase"
          :class="{ collapse: menuCollapsed }"
        >
          <ul class="navbar-nav me-lg-auto">
            <li class="nav-item ms-lg-1">
              <router-link
                class="nav-link"
                :to="{ name: 'home' }"
                @click="closeMenu()"
                >Home</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav ms-lg-auto">
            <li class="nav-item me-lg-3">
              <router-link
                class="nav-link"
                :to="{ name: 'projects' }"
                @click="closeMenu()"
              >
                Projects
              </router-link>
            </li>
            <li class="nav-item me-lg-3">
              <router-link
                class="nav-link"
                :to="{ name: 'talks' }"
                @click="closeMenu()"
                >Talks</router-link
              >
            </li>
            <li class="nav-item me-lg-3">
              <router-link
                class="nav-link"
                :to="{ name: 'blog' }"
                @click="closeMenu()"
                >Blog</router-link
              >
            </li>
            <li class="nav-item me-0">
              <!-- <router-link
                class="nav-link"
                :to="{ name: 'contact' }"
                @click="closeMenu()"
                >Contact</router-link
              > -->
              <a
                class="nav-link"
                target="_self"
                href="#hire-me"
                @click="closeMenu()"
                >Contact</a
              >
            </li>
            <!-- <li class="nav-item dropdown me-0">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navigationLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div
                class="dropdown-menu dropdown-menu-right text-capitalize shadow-lg"
                aria-labelledby="navigationLink"
              >
                <a class="dropdown-item" href="project.html"
                  >Project Case Study (1 Column)</a
                >
                <a class="dropdown-item" href="project-alt.html"
                  >Project Case Study (2 Columns)</a
                >
                <a class="dropdown-item" href="blog-post.html">Blog Post</a>
              </div>
            </li> -->
          </ul>
          <span id="slide-line"></span>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useNavigation } from "@/composables";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { updateSlideLine } = useNavigation();
const menuCollapsed = ref(true);

watch(router.currentRoute, updateSlideLine);

window.addEventListener("resize", () => {
  updateSlideLine(router.currentRoute.value);
});

function toggleMenu() {
  menuCollapsed.value = !menuCollapsed.value;
}
function closeMenu() {
  menuCollapsed.value = true;
}
</script>
