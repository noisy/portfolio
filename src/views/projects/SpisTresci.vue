<template>
  <CoverImage :url="`@/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <p>
      In 2012, as a hobby, I started a blog about Amazon's Kindle eReaders.
      Surprisingly, my blog started to get a lot of views. I've noticed that my
      readers were frequently asking what the best places to buy ebooks are. The
      answer to this question was not apparent because the prices of books are
      changing all the time, and not every bookstore had ebooks available in a
      proper format. Then I've decided to start working on SpisTresci.pl, which
      goal was to help with that.
    </p>
    <Carousel :items-to-show="1" :paths="imagesPaths" />

    <div class="ratio ratio-4x3 me-md-3">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/d0AzGJ0slXE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
  <h3 class="section-title">My Role in This Project &amp; Our Team</h3>
  <p>
    I was a founder, a lead developer, and a CEO of this project. My college
    Piotr Zawiślak from Opera Software, become a co-founder. After the start of
    the project, we realized that establishing business relationships with
    proper partners will require much more effort. My wife Magdalena joined our
    team to help us with that. During the next few months, Patryk and Mateusz
    joined us.
  </p>
  <p><img :src="img('spistresci-core-team.jpg')" class="w-100" /></p>

  <h4 class="section-subtitle">Till This Point, I Was Not a Web Developer</h4>
  <p>
    Before I started working on this project, I've had ~4,5 years of commercial
    experience programming in C/C++ &amp; Java for Opera Software. But almost no
    experience with web technologies.
  </p>
  <p>
    We decided to choose Python and Django to build the backend and jQuery to
    build the frontend. All those things were new for me, so I was learning as I
    was going, developing new things. Even styling with CSS was a challenge for
    me at some point.
  </p>
  <p>
    It took our team much longer than I initially anticipated. Nevertheless, I
    believe, thanks to a clear goal, I've personally accelerated my learning
    speed enormously.
  </p>

  <h4 class="section-subtitle">Books Matching</h4>
  <p>
    Every price comparison website should group the same products from different
    shops under one position. I thought this should be trivial because books
    have ISBN codes. I was wrong. Most traditional books have ISBN codes, but
    not most eBooks &amp; Audiobooks. Maybe 20% of them had one (in 2013).
  </p>
  <p>
    I've decided to write a heuristic algorithm responsible for calculating
    whether two particular books should be grouped.
  </p>
  <p>
    From the very beginning, the problem was a massive database of books from
    ~50 bookstores. I had a problem to came up with an algorithm accurate enough
    and fast at the same time. I could make it quick, but then I was getting
    many false positive and false negative matches. I've ended up coding
    something acceptable… but now I know
    <b>that was a completely wrong approach</b>.
  </p>
  <p>
    What I should do at that point, and what competition was doing, I should
    match all those books semi-manually, with the help of some custom-made tool
    designed for that. That actually would be much cheaper, considering I could
    delegate that to someone else (less expensive to hire than a programmer).
  </p>
  <p>
    Nowadays, having already manually curated a large set of adequately matched
    books, I would probably be tempted to try to create a small neural network
    to deal with this problem. Ironically, even right now, it would probably be
    cheaper to this semi-manual. That was a big lesson for me - not everything
    that I had an ambition to code myself was a good idea from a business
    perspective.
  </p>
  <Quote
    ><div>
      One of the biggest traps for smart engineers is optimizing a thing that
      shouldn't exist.
    </div>
    <div class="text-end">Elon Musk</div>
  </Quote>

  <h4 class="section-subtitle">
    Establishing Business Relationships with ~50 Online Bookstores
  </h4>
  <p>
    The most challenging partnership to establish was the first one. It took a
    lot of time and effort to convince the first bookstore to give us access to
    their database. Nobody knew us at the time, and our lack of experience with
    the business world was not helping at all.
  </p>
  <p>
    But after getting the first 2-3 partners, things were getting more
    accessible, mainly because we were able to say who already we have on board.
  </p>
  <p>
    After some time, getting new deals was not a huge problem. However,
    negotiating the terms of all those deals required at least one person to
    focus on that solely. My wife did a fantastic job in this area, to the point
    she was able to get us a new deal quicker than we were able to integrate the
    last bookstore with our system.
  </p>
  <p><img :src="img('partners.png')" class="w-100" /></p>
  <p>
    Now I know that this actually should be a red flag for us, that we overdid
    it.
  </p>

  <p>
    <b>I decided</b> that we should start with the most bookstores possible
    because that supposed to be our differentiator from the already existing
    competition. Even today, eight years later, no service in Poland has
    integrated more online bookstores than we did in 2013.
  </p>
  <p>
    <b>It was a wrong decision</b>. We should follow the Pareto principle and
    focus on ~20% bookstores, which would give us around 80% of offers available
    on the Polish market, but at the same time greatly simplified the
    development of the whole product.
  </p>

  <h4 class="section-subtitle">
    Integration of ~50 different online bookstores
  </h4>
  <p>
    We needed to design and create a mechanism to import book prices from those
    bookstores, which in most cases had different APIs.
  </p>
  <p>
    The beginning of this again was tough because we were not aware of the APIs
    of bookstores, with which we have not had a deal yet. It is challenging to
    implement a generic solution when you have 1 or 2 examples. As we were
    getting access to more and more APIs, we noticed more similarities, which
    allowed us to create a more generalized mechanism. That's said, we have
    prepared a tool, which within 1-2 hours allowed us to configure and
    integrate a new small bookstore.
  </p>

  <p>
    We coded generic "connectors" for many formats/protocols like XML, JSON,
    OAI, MARC21, which later we could extend to provide a final implementation
    of connector for a specific bookstore.
  </p>
  <p>
    Fortunately, most bookstores were able to give us access to their daily
    snapshot in XML format. The format of those particular files varied
    dramatically. However, thanks to the power of XPath, we were able to develop
    a pretty robust mechanism, which would extract needed data and put
    everything in our unified database.
  </p>

  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>

    <h4 class="section-subtitle">Not Understanding What MVP Truly Means</h4>
    <p>
      About this very topic, I've written a separate elaborate article, which I
      recommend reading. Steem community appreciated and reworded it with
      <a
        href="https://steemit.com/programming/@noisy/how-i-bankrupt-my-first-startup-by-not-understanding-the-definition-of-mvp-minimum-viable-product#"
        target="_blank"
        >a prize of $1,827.89</a
      >.
    </p>

    <div class="blog-cards row">
      <div class="col-12">
        <BlogPostThumbnail
          class="mx-auto"
          style="width: 70%"
          :blog-post="mvpBlogPost"
        />
      </div>
    </div>

    <h4 class="section-subtitle">
      Solving a Problem, Which Could Be Easily and Cheaply Outsourced
    </h4>
    <p>
      Because I was an ambitious developer, I've wanted to design a solution for
      the matching problem described earlier. It was a mistake. We should
      recognize earlier that this will be too hard, and we should approach this
      differently and do it semi-manually.
    </p>

    <h4 class="section-subtitle">Not Looking for Investors Early Enough</h4>
    <p>
      I had some small capital, which I believed should be enough to prepare an
      MVP. As it turned out, it wasn't enough, and additional capital would help
      a lot. But back then, I didn't understand the more important thing:
      finding investors is not just about money. Often it is more about getting
      mentors, know-how, and advice from more experienced business-oriented
      people. Good investors would probably help us focus more on essential
      metrics from the beginning, allowing us to avoid bankruptcy.
    </p>

    <h4 class="section-subtitle">Failing Is Still Better Than Not Trying</h4>
    <p>
      Despite a failure of the whole thing, I still believe it was worth it.
      This startup put me on the fast track of learning. Often people are afraid
      of failing just because they don't want to lose. I was amazed when I
      understood how valuable knowledge and experience derived from failure
      could be. It can outweigh by order of magnitude or more a cost of a
      particular failure.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
    <p>
      SpisTresci.pl officially was a failure. We run out of funds before we were
      able to generate profit. That's said, I still think it was one of the best
      experiences of my life. Thanks to that, I know at least one way how not to
      run a startup, and I know that's worth something.
    </p>
  </div>
  <Testimonial
    v-for="t in testimonials"
    :key="t.author"
    :author="t.author"
    :body="t.body"
    :title="t.title"
    :picture-url="t.pictureUrl"
    :type="t.type"
    :url="t.url"
  >
  </Testimonial>
</template>

<script lang="ts">
import {
  BlogPostThumbnail,
  Carousel,
  Quote,
  Testimonial,
} from "@/components";
import { useAssets, useDB, useProject } from "@/composables";
import type { IProject, ITestimonial } from "@/types";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SpisTresci",
  components: {
    Testimonial,
    Carousel,
    Quote,
    BlogPostThumbnail,
  },
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true,
    },
    testimonials: {
      type: Array as PropType<ITestimonial[]>,
      required: true,
    },
  },
  setup(props) {
    const { blogPosts } = useDB();
    const { getImagesPaths } = useProject();
    const { getAsset } = useAssets();
    return {
      imagesPaths: getImagesPaths(props.project, 4),
      mvpBlogPost: blogPosts.find((post) => post.slug == "mvp"),
      img: (filename: string) =>
        getAsset(`@/images/projects/spistresci-pl/${filename}`),
    };
  },
});
</script>
