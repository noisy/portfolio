<template>
  <section class="section-press py-5 bg-white">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-5">
        Featured in
      </h3>
      <div class="press-logos row">
        <div
          class="align-self-center press-logo px-4 px-lg-4 col-8 col-sm-4 px-md-5 px-lg-5 m-4 mb-lg-0 mx-auto"
        >
          <a
            class="logo-link"
            href="https://spidersweb.pl/2014/01/spistresci-pl.html"
            target="_blank"
          >
            <img
              class="img-fluid svg-ie-fix mt-3"
              src="@/images/logos/spidersweb.svg"
            />
          </a>
        </div>
        <div
          class="align-self-center press-logo px-4 px-lg-4 col-8 col-sm-4 px-md-5 px-lg-5 m-4 mb-lg-0 mx-auto"
        >
          <a
            class="logo-link"
            href="https://niebezpiecznik.pl/post/white-hat-hacking-w-praktyce-czyli-jak-przejalem-11-kont-i-kontrole-nad-21-tysiacami-dolarow-w-kryptowalucie/"
            target="_blank"
          >
            <img
              class="img-fluid svg-ie-fix w-100"
              src="@/images/logos/niebezpiecznik.png"
          /></a>
        </div>
        <div
          class="align-self-center press-logo px-4 px-lg-4 col-8 col-sm-4 px-md-5 px-lg-5 m-4 mb-lg-0 mx-auto"
        >
          <a
            class="logo-link"
            href="https://www.wykop.pl/link/4515293/o-tym-jak-drobny-blad-wykop-pl-mogl-zostac-w-niecnych-celach-wykorzystany/"
            target="_blank"
            ><img class="img-fluid svg-ie-fix" src="@/images/logos/wykop.png"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeaturedIn",
});
</script>
