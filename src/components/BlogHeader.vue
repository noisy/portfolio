<template>
  <div class="header-intro theme-bg-primary text-white py-5">
    <div class="container position-relative">
      <div class="row g-2 g-lg-3">
        <div class="col-12 col-md-auto">
          <img
            class="
              profile-medium
              d-inline-block
              rounded-circle
              me-md-4
              align-self-center
              mb-2 mb-lg-0
            "
            src="assets/images/profile.png"
            alt=""
          />
        </div>
        <!--//col-->
        <div class="col align-self-center">
          <h2 class="page-heading mb-2">Krzysztof Szumny's Blog</h2>
          <div class="page-heading-tagline mb-3">
            I write about web development and life as a developer.
            <br class="d-lg-block d-none" />You can follow me via the various
            channels below:
          </div>
          <ul class="social-list-square list-inline mb-0">
            <li class="list-inline-item mb-3 mb-lg-0">
              <a href="#"><i class="fab fa-twitter fa-fw text-white"></i></a>
            </li>

            <li class="list-inline-item mb-3 mb-lg-0">
              <a href="#"
                ><i class="fab fa-linkedin-in fa-fw text-white"></i
              ></a>
            </li>
            <li class="list-inline-item mb-3 mb-lg-0">
              <a href="#"><i class="fab fa-github-alt fa-fw text-white"></i></a>
            </li>
            <li class="list-inline-item mb-3 mb-lg-0">
              <a href="#"
                ><i class="fab fa-stack-overflow fa-fw text-white"></i
              ></a>
            </li>
            <li class="list-inline-item mb-3 mb-lg-0">
              <a href="#"><i class="fab fa-medium-m fa-fw text-white"></i></a>
            </li>
            <li class="list-inline-item mb-3 mb-lg-0">
              <a href="#"><i class="fab fa-codepen fa-fw text-white"></i></a>
            </li>
          </ul>
          <!--//social-list-->
        </div>
        <!--//col-->
      </div>
    </div>
    <!--//container-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogPostHeader",
});
</script>
