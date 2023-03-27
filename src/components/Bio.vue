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
              I'm an incredibly determined, self-driven, and fast-learning
              individual, striving to become a professional Quality Assurance
              Tester and Automation Engineer. I possess real-world experience in
              automating e-commerce business processes and have a solid
              understanding of current leading technologies. I diligently
              document my entire learning journey on my

              <a class="link-on-bg text-link" :href="`${github}`"
                >Github page</a
              >
              and this website. Want to know how I may help your project? Check
              out my project
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
const { fullName, github } = useMe();
</script>
