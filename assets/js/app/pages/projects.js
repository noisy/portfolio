import { PageHeader, Projects } from "../components/index.js";
import { useDB } from "../composables/useDB.js";

export default {
  components: {
    PageHeader,
    Projects,
  },
  template: `
    <page-header title="Projects">In-depth Case Studies to show you what I can offer and how I work</page-header>
    <Projects/>
  `,
  setup(props) {
    const { projects } = useDB();
    return { projects };
  },
};
