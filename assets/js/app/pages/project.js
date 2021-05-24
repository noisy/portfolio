import { PageHeader, HireMeFooter } from "../components/index.js";
import { useDB } from "../composables/useDB.js";

export default {
  components: {
    PageHeader,
    HireMeFooter,
  },
  template: `
    <PageHeader :title="project.name">{{ project.summary }}</PageHeader>
    <HireMeFooter/>
  `,
  setup(props) {
    const { projects } = useDB();
    const route = VueRouter.useRoute();
    const slug = route.params.slug;
    const project = projects.find((p) => p.slug == slug);
    return { project };
  },
};
