import Bio from "../components/bio.js";
import SkillsOverview from "../components/skillsOverview.js";
import Companies from "../components/companies.js";
import Testimonials from "../components/testimonials.js";
import ProjectThumbnail from "../components/projectThumbnail.js";
import FeaturedProjects from "../components/featuredProjects.js";
import { useDB } from "../composables/useDB.js";

export default {
  components: {
    Bio,
    SkillsOverview,
    Companies,
    Testimonials,
    ProjectThumbnail,
    FeaturedProjects,
  },
  template: `
    <Bio/>
    <SkillsOverview/>
    <Companies/>
    <Testimonials :testimonials="testimonials" />
    <FeaturedProjects/>
  `,
  setup(props) {
    const { testimonials } = useDB();
    return { testimonials };
  },
};
