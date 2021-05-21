import { PageHeader, Projects, HireMeFooter } from "../components/index.js";
import { useDB } from "../composables/useDB.js";

export default {
  components: {
    PageHeader,
    Projects,
    HireMeFooter,
  },
  template: `
    <PageHeader title="Projects">In-depth Case Studies to show you what I can offer and how I work</PageHeader>
    <Projects />
    <HireMeFooter/>
  `,
  setup(props) {
    const { projects } = useDB();
    return { projects };
  },
};
