import Bio from "../components/bio.js";
import SkillsOverview from "../components/skillsOverview.js";
import Companies from "../components/companies.js";
import Testimonials from "../components/testimonials.js";
import ProjectThumbnail from "../components/projectThumbnail.js";
import FeaturedProjects from "../components/featuredProjects.js";
import LatestBlogPosts from "../components/latestBlogPosts.js";
import FeaturedIn from "../components/featuredIn.js";
import HireMeFooter from "../components/hireMeFooter.js";
import { useDB } from "../composables/useDB.js";

export default {
  components: {
    Bio,
    SkillsOverview,
    Companies,
    Testimonials,
    ProjectThumbnail,
    FeaturedProjects,
    LatestBlogPosts,
    FeaturedIn,
    HireMeFooter,
  },
  template: `
    <Bio/>
    <SkillsOverview/>
    <Companies/>
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
