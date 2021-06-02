<template>
  <section class="skills-section section py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-3">
        Skills Overview
      </h3>
      <div class="section-intro mx-auto text-center mb-5 text-secondary">
        I have more than 12 years' experience building rich web applications &
        sophisticated applications for clients all over the world. Below is a
        quick overview of my main technical skill sets and tools I use. Want to
        find out more about my experience?
        <router-link class="text-link" :to="{ name: 'resume' }"
          >Check out my online resume</router-link
        >.
      </div>

      <div class="skills-blocks mx-auto pt-5">
        <div class="row">
          <div class="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
            <div
              class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative"
            >
              <h4 class="skills-cat text-center mb-3 mt-5">Frontend</h4>
              <div
                class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center"
              >
                <img class="skills-icon" src="images/frontend-icon.svg" />
              </div>
              <ul class="skills-list list-unstyled text-secondary">
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i
                  >Vue.js/Angular/React
                </li>
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i
                  >Javascript/Typescript
                </li>
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i>Node.js
                </li>
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i
                  >HTML/CSS/SASS/LESS
                </li>
              </ul>
            </div>
            <!--//skills-block-inner-->
          </div>
          <!--//skills-block-->

          <div class="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
            <div
              class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative"
            >
              <h4 class="skills-cat text-center mb-3 mt-5">Backend</h4>
              <div
                class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center"
              >
                <img
                  class="skills-icon"
                  src="images/backend-icon.png"
                  style="margin: -5px"
                />
              </div>
              <ul class="skills-list list-unstyled text-secondary">
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i>Python/Django
                </li>
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i>C/C++
                </li>
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i>Java
                </li>
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i
                  >PostgresSQL/MySQL
                </li>
              </ul>
            </div>
            <!--//skills-block-inner-->
          </div>
          <!--//skills-block-->

          <div class="skills-block col-12 col-lg-4">
            <div
              class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative"
            >
              <h4 class="skills-cat text-center mb-3 mt-5">Others</h4>
              <div
                class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center"
              >
                <img class="skills-icon" src="images/other-skills-icon.svg" />
              </div>
              <ul class="skills-list list-unstyled text-secondary">
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i>DevOps
                </li>
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i>Unit Testing
                </li>
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i>Docker
                </li>
                <li class="mb-2">
                  <i class="fas fa-check me-2 text-primary"></i>Stripe
                </li>
              </ul>
            </div>
            <!--//skills-block-inner-->
          </div>
          <!--//skills-block-->
        </div>
        <!--//row-->
      </div>
    </div>
    <!--//container-->
  </section>
  <!--//skills-section-->
</template>
