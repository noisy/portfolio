import Bio from "../components/bio.js";
import SkillsOverview from "../components/skillsOverview.js";
import Companies from "../components/companies.js";
import Testimonials from "../components/testimonials.js";
import ProjectThumbnail from "../components/projectThumbnail.js";
import db from "../db.js";

export default {
  components: {
    Bio,
    SkillsOverview,
    Companies,
    Testimonials,
    ProjectThumbnail,
  },
  template: `
    <Bio/>
    <SkillsOverview/>
    <Companies/>
    <Testimonials :testimonials="db.testimonials" />
  `,
  setup(props) {
    console.log(props);
    return { db };
  },
};
