<template>
  <header class="header">
    <div class="header-intro theme-bg-primary text-white py-5">
      <div class="container">
        <div class="profile-teaser row gx-lg-5 justify-content-center">
          <div class="col-12 col-md-auto text-center text-md-start">
            <img
              class="profile-image mb-3 mb-lg-0 ms-md-0 rounded mx-auto"
              src="@/images/profile.png"
              alt=""
            />
          </div>
          <div class="col text-center text-md-start">
            <div class="lead">Hello, my name is</div>
            <h2 class="mt-0 display-4 font-weight-bold">{{ fullName }}</h2>
            <div class="bio mb-3">
              I'm a full-stack developer specialised in frontend and backend
              development for complex scalable web apps. I write about web
              development on
              <router-link class="link-on-bg text-link" :to="{ name: 'blog' }"
                >my blog</router-link
              >
              and regularly
              <router-link class="link-on-bg text-link" :to="{ name: 'talks' }"
                >speak</router-link
              >
              at various web conferences and meetups. Want to know how I may
              help your project? Check out my project
              <router-link
                class="link-on-bg text-link"
                :to="{ name: 'projects' }"
                >case studies</router-link
              >.
            </div>
            <a
              class="theme-btn-on-bg btn font-weight-bold theme-btn-cta"
              href="#hire-me"
              target="_self"
              >Hire Me</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useMe } from "@/composables";
const { fullName } = useMe();
</script>
