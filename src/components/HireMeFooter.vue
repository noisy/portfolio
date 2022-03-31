<template>
  <section id="hire-me" class="section-cta py-5 bg-primary text-white">
    <div class="container">
      <div class="text-center">
        <img
          class="profile-small d-inline-block mx-auto rounded-circle mb-2"
          src="@/images/profile.png"
          alt=""
        />
      </div>
      <h3 class="section-title font-weight-bold text-center mb-2">
        Interested in hiring me for your project?
      </h3>
      <div class="section-intro mx-auto text-center mb-3">
        Looking for an experienced full-stack developer to build your web app or
        ship your software product? To start an initial chat, just drop me an
        email at
        <a class="link-on-bg text-link" :href="`mailto:${contactEmail}`">{{
          contactEmail
        }}</a>
        or use the
        <router-link class="link-on-bg text-link" :to="{ name: 'contact' }"
          >form on the contact page</router-link
        >.
      </div>
      <div class="text-center">
        <router-link class="theme-btn-on-bg btn" :to="{ name: 'contact' }"
          >Let's Talk</router-link
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useDB } from "@/composables/useDB";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HireMeFooter",
  setup() {
    const { contactEmail } = useDB();
    return { contactEmail };
  },
});
</script>
