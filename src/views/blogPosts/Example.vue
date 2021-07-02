<template>
  <div class="section-row">
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
    </p>

    <p class="my-5 text-center">
      <a
        class="btn btn-primary me-lg-3 mb-3"
        href="https://themes.3rdwavemedia.com/"
        target="_blank"
      >
        <font-awesome-icon icon="desktop" class="me-2" />
        View Live Demo</a
      >
      <a
        class="btn btn-secondary mb-3"
        href="https://themes.3rdwavemedia.com/"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'github-alt']" class="me-2" />
        View on GitHub</a
      >
    </p>

    <blockquote class="blockquote theme-blockquote text-center">
      <font-awesome-layers class="fa-fw mb-3">
        <font-awesome-icon
          icon="circle"
          class="text-secondary"
          transform="grow-12"
        />
        <font-awesome-icon
          icon="quote-right"
          class="text-white"
          transform="shrink-4"
        />
      </font-awesome-layers>

      <p class="mb-3 font-italic">
        "Walking on water and developing software from a specification are easy
        if both are frozen."
      </p>
      <footer class="blockquote-footer mt-0">
        <cite title="Source Title">Edward V Berard</cite>
      </footer>
    </blockquote>
  </div>
  <!--//section-row-->

  <div class="section-row">
    <h3 class="section-title">Heading Vestibulum Fringilla</h3>
    <p>
      Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus
      orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis
      porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis
      orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus,
      bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit
      amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean
      posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
      sollicitudin urna dolor sagittis lacus.
    </p>

    <p>
      You can
      <a
        href="https://help.twitter.com/en/using-twitter/how-to-embed-a-tweet"
        target="_blank"
        >embed a tweet</a
      >
      on your blog post:
    </p>
    <div class="mb-5 text-center">
      <blockquote class="twitter-tweet" data-lang="en">
        <p lang="en" dir="ltr">
          &quot;One of the best programming skills you can have is knowing when
          to walk away for awhile.&quot; - Oscar Godson
        </p>
        &mdash; Programming Wisdom (@CodeWisdom)
        <a
          href="https://twitter.com/CodeWisdom/status/841357948542713856?ref_src=twsrc%5Etfw"
          >March 13, 2017</a
        >
      </blockquote>
      <!-- <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script> -->
    </div>

    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis. Nam eget
      dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
      quam semper libero, sit amet adipiscing sem neque sed ipsum.
    </p>

    <ul class="mb-5 ms-md-5">
      <li class="mb-4">
        <strong>Lorem ipsum</strong> dolor sit amet consectetuer.
      </li>
      <li class="mb-4"><strong>Aenean</strong> commodo ligula eget dolor.</li>
      <li class="mb-4">
        <strong>Aenean</strong> massa cum sociis natoque penatibus.
      </li>
      <li class="mb-4"><strong>Pellentesque</strong> auctor neque nec urna.</li>
    </ul>

    <p>
      Below are some code examples using the
      <a class="text-link" href="https://highlightjs.org/" target="_blank"
        >highlight.js</a
      >
      plugin. You can
      <a
        class="text-link"
        href="https://highlightjs.org/download/"
        target="_blank"
        >customise the script to include more languages</a
      >
      via their website if you need to. The stylesheet used in this template is
      <code>atom-one-dark.css</code>
    </p>
    <h4 class="mb-3">HTML Code Example</h4>
    <div class="mb-5">
      <pre><code class="html">
&#x3C;div class=&#x22;card&#x22; style=&#x22;width: 18rem;&#x22;&#x3E;
  &#x3C;img class=&#x22;card-img-top&#x22; src=&#x22;...&#x22; alt=&#x22;Card image cap&#x22;&#x3E;
  &#x3C;div class=&#x22;card-body&#x22;&#x3E;
    &#x3C;h5 class=&#x22;card-title&#x22;&#x3E;Card title&#x3C;/h5&#x3E;
    &#x3C;p class=&#x22;card-text&#x22;&#x3E;Some quick example text to build on the card title and make up the bulk of the card&#x27;s content.&#x3C;/p&#x3E;
    &#x3C;a href=&#x22;#&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Go somewhere&#x3C;/a&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
			    </code></pre>
    </div>

    <h4 class="mb-3">CSS Code Example</h4>
    <div class="mb-5">
      <pre><code class="css">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

		    </code></pre>
    </div>

    <h4 class="mb-3">JavaScript Code Example</h4>
    <div class="mb-5">
      <pre><code class="javascript">
$(document).ready(function() {
  $(&#x27;pre code&#x27;).each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
			    </code></pre>
    </div>

    <h4 class="mb-3">Responsive Video</h4>
    <div class="embed-responsive embed-responsive-16by9 mb-5">
      <iframe
        class="embed-responsive-item"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9aVJOg2EB9I?rel=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <!--//section-row-->

  <div class="section-row">
    <h3 class="section-title">Heading Inventore Veritatis Quasi</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
      elementum semper nisi. Aenean vulputate eleifend tellus.
    </p>

    <figure class="figure mb-5">
      <img
        class="img-fluid figure-img"
        src="assets/images/blog/blog-post-image-example-1.png"
      />
      <figcaption class="figure-caption text-center">
        A caption for the above image.
      </figcaption>
    </figure>

    <p>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime.
    </p>

    <ol class="mb-5 ms-md-5">
      <li class="mb-4">Dolor sit amet consectetuer.</li>
      <li class="mb-4">Commodo ligula eget dolor.</li>
      <li class="mb-4">Massa cum sociis natoque penatibus.</li>
      <li class="mb-4">Auctor neque nec urna.</li>
      <li class="mb-4">Integer tincidunt.</li>
      <li class="mb-4">Ut varius tincidunt.</li>
    </ol>
    <p>
      Similique sunt in culpa qui officia deserunt mollitia animi, id est
      laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
      distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
      nihil impedit quo minus id quod maxime.
    </p>
  </div>
  <!--//section-row-->

  <nav class="post-nav d-flex justify-content-between">
    <div class="nav-previous">
      <a class="text-link" href="#" rel="prev"
        ><i class="fas fa-long-arrow-alt-left me-1"></i>Previous
        <span class="d-none d-md-inline">Post</span></a
      >
    </div>
    <div class="nav-next">
      <a class="text-link" href="#" rel="next"
        >Next <span class="d-none d-md-inline">Post</span
        ><i class="fas fa-long-arrow-alt-right ms-1"></i
      ></a>
    </div>
  </nav>

  <div class="author-block my-5 bg-white p-4 p-l-5 shadow-sm">
    <div class="row">
      <div class="col-12 col-md-auto">
        <img
          class="author-profile profile-small d-inline-block rounded-circle"
          src="assets/images/profile.png"
          alt=""
        />
      </div>
      <!--//col-->

      <div class="col author-info">
        <h4 class="mb-2 font-weight-bold">Krzysztof Szumny</h4>
        <div class="mb-3">
          I'm a full stack developer with a passion for software development and
          UX. You can follow me via the various channels below:
        </div>
        <ul class="social-list-color list-inline mb-0">
          <li class="list-inline-item mb-3">
            <a class="twitter rounded-circle" href="#"
              ><i class="fab fa-twitter fa-fw"></i
            ></a>
          </li>

          <li class="list-inline-item mb-3">
            <a class="linkedin rounded-circle" href="#"
              ><i class="fab fa-linkedin-in fa-fw"></i
            ></a>
          </li>
          <li class="list-inline-item mb-3">
            <a class="github rounded-circle" href="#"
              ><i class="fab fa-github-alt fa-fw"></i
            ></a>
          </li>
          <li class="list-inline-item mb-3">
            <a class="stack-overflow rounded-circle" href="#"
              ><i class="fab fa-stack-overflow fa-fw"></i
            ></a>
          </li>
          <li class="list-inline-item mb-3">
            <a class="medium rounded-circle" href="#"
              ><i class="fab fa-medium-m fa-fw"></i
            ></a>
          </li>
          <li class="list-inline-item mb-3">
            <a class="codepen rounded-circle" href="#"
              ><i class="fab fa-codepen fa-fw"></i
            ></a>
          </li>

          <!--<li class="list-inline-item mb-3"><a class="facebook" href="#"><i class="fab fa-facebook-f fa-fw"></i></a></li>-->

          <!--<li class="list-inline-item"><a class="instagram" href="#"><i class="fab fa-instagram fa-fw"></i></a></li>-->
        </ul>
        <!--//social-list-->
      </div>
    </div>
  </div>

  <div id="comments-block" class="comments-block">
    <!--//DISQUS script starts-->
    <div id="disqus_thread"></div>
    <!-- <script type="text/javascript">
          /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
          var disqus_shortname = "3wmthemes"; // required: replace example with your forum shortname

          /* * * DON'T EDIT BELOW THIS LINE * * */
          (function () {
            var dsq = document.createElement("script");
            dsq.type = "text/javascript";
            dsq.async = true;
            dsq.src = "//" + disqus_shortname + ".disqus.com/embed.js";
            (
              document.getElementsByTagName("head")[0] ||
              document.getElementsByTagName("body")[0]
            ).appendChild(dsq);
          })();
        </script>
        <noscript
          >Please enable JavaScript to view the
          <a href="http://disqus.com/?ref_noscript"
            >comments powered by Disqus.</a
          ></noscript
        > -->
    <a href="http://disqus.com" class="dsq-brlink"
      >comments powered by <span class="logo-disqus">Disqus</span></a
    >
    <!--//DISQUS script ends-->
  </div>
  <!--//comments-block-->
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IBlogPost } from "@/types";

export default defineComponent({
  name: "MVP",
  components: {},
  props: {
    blogPost: {
      type: Object as PropType<IBlogPost>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
