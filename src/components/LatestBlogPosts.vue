<template>
  <section class="section-latest-blog py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-5">
        Latest Blog Posts
      </h3>

      <div class="blog-cards row">
        <div v-for="post in blogPosts" :key="post.slug" class="col-12 col-lg-6">
          <BlogPostThumbnail :blog-post="post" />
        </div>
        <div class="col-12 col-lg-6">
          <div class="card rounded-0 border-0 shadow-sm mb-5">
            <div class="card-img-container position-relative">
              <img
                class="card-img-top rounded-0"
                src="/images/blog/blog-post-thumb-2.jpg"
                alt=""
              />
              <div
                class="
                  card-img-overlay
                  overlay-mask overlay-logo
                  text-center
                  p-0
                "
              >
                <div
                  class="
                    overlay-mask-content
                    text-center
                    w-100
                    position-absolute
                  "
                >
                  <a class="btn btn-primary" href="blog-post.html">Read more</a>
                </div>
                <a
                  class="overlay-mask-link position-absolute w-100 h-100"
                  href="blog-post.html"
                ></a>
              </div>
            </div>
            <div class="card-body pb-4">
              <h4 class="card-title text-truncate mb-2">
                <a class="text-link" href="blog-post.html"
                  >React, Bootstrap, and Angular- The Basics</a
                >
              </h4>
              <div class="card-text">
                <ul class="meta list-inline mb-1">
                  <li class="list-inline-item me-3">
                    <font-awesome-icon
                      :icon="['far', 'clock']"
                      class="me-2"
                    />June 18, 2021
                  </li>
                  <li class="list-inline-item">
                    <i class="fas fa-comment me-2"></i
                    ><a class="text-link" href="#">8 Comments</a>
                  </li>
                </ul>
                <div class="excerpt">
                  Blog post intro goes here. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque vel sapien quis nulla
                  dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...
                </div>
              </div>
            </div>
          </div>
          <!--//card-->
        </div>

        <div class="col-12 col-lg-6">
          <div class="card rounded-0 border-0 shadow-sm mb-5">
            <div class="card-img-container position-relative">
              <img
                class="card-img-top rounded-0"
                src="/images/blog/blog-post-thumb-3.jpg"
                alt=""
              />
              <div
                class="
                  card-img-overlay
                  overlay-mask overlay-logo
                  text-center
                  p-0
                "
              >
                <div
                  class="
                    overlay-mask-content
                    text-center
                    w-100
                    position-absolute
                  "
                >
                  <a class="btn btn-primary" href="blog-post.html">Read more</a>
                </div>
                <a
                  class="overlay-mask-link position-absolute w-100 h-100"
                  href="blog-post.html"
                ></a>
              </div>
            </div>
            <div class="card-body pb-4">
              <h4 class="card-title text-truncate mb-2">
                <a class="text-link" href="blog-post.html"
                  >Best Practices for Code Review</a
                >
              </h4>
              <div class="card-text">
                <ul class="meta list-inline mb-1">
                  <li class="list-inline-item me-3">
                    <font-awesome-icon
                      :icon="['far', 'clock']"
                      class="me-2"
                    />May 7, 2021
                  </li>
                  <li class="list-inline-item">
                    <i class="fas fa-comment me-2"></i
                    ><a class="text-link" href="#">23 Comments</a>
                  </li>
                </ul>
                <div class="excerpt">
                  Blog post intro goes here. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque vel sapien quis nulla
                  dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...
                </div>
              </div>
            </div>
          </div>
          <!--//card-->
        </div>

        <div class="col-12 col-lg-6">
          <div class="card rounded-0 border-0 shadow-sm mb-5">
            <div class="card-img-container position-relative">
              <img
                class="card-img-top rounded-0"
                src="/images/blog/blog-post-thumb-4.jpg"
                alt=""
              />
              <div
                class="
                  card-img-overlay
                  overlay-mask overlay-logo
                  text-center
                  p-0
                "
              >
                <div
                  class="
                    overlay-mask-content
                    text-center
                    w-100
                    position-absolute
                  "
                >
                  <a class="btn btn-primary" href="blog-post.html">Read more</a>
                </div>
                <a
                  class="overlay-mask-link position-absolute w-100 h-100"
                  href="blog-post.html"
                ></a>
              </div>
            </div>
            <div class="card-body pb-4">
              <h4 class="card-title text-truncate mb-2">
                <a class="text-link" href="blog-post.html"
                  >Learn React Components</a
                >
              </h4>
              <div class="card-text">
                <ul class="meta list-inline mb-1">
                  <li class="list-inline-item me-3">
                    <font-awesome-icon
                      :icon="['far', 'clock']"
                      class="me-2"
                    />Apr 25, 2021
                  </li>
                  <li class="list-inline-item">
                    <i class="fas fa-comment me-2"></i
                    ><a class="text-link" href="#">18 Comments</a>
                  </li>
                </ul>
                <div class="excerpt">
                  Blog post intro goes here. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque vel sapien quis nulla
                  dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...
                </div>
              </div>
            </div>
          </div>
          <!--//card-->
        </div>
      </div>
      <!--//blog-cards-->
    </div>

    <div class="text-center">
      <router-link class="btn btn-primary" :to="{ name: 'blog' }"
        >View all posts</router-link
      >
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BlogPostThumbnail } from "@/components";
import { useDB } from "@/composables";
export default defineComponent({
  name: "LatestBlogPosts",
  components: { BlogPostThumbnail },
  setup() {
    const { blogPosts } = useDB();
    return { blogPosts };
  },
});
</script>
