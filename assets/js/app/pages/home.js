import {
  Testimonials,
  ProjectThumbnail,
  FeaturedProjects,
  LatestBlogPosts,
  FeaturedIn,
  HireMeFooter,
} from "../components/index.js";

import { useDB } from "../composables/useDB.js";

export default {
  components: {
    Testimonials,
    ProjectThumbnail,
    FeaturedProjects,
    LatestBlogPosts,
    FeaturedIn,
    HireMeFooter,
  },
  template: `
    <!-- <Bio/> -->
    <!-- <SkillsOverview/> -->
    <!-- <Companies/> -->
    <Testimonials :testimonials="testimonials" />
    <FeaturedProjects/>
    <LatestBlogPosts/>
    <FeaturedIn/>
    <HireMeFooter/>
  `,
  setup(props) {
    const { testimonials } = useDB();
    return { testimonials };
  },
};
