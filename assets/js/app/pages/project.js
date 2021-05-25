import { PageHeader, ProjectInfo, HireMeFooter } from "../components/index.js";
import { useDB } from "../composables/useDB.js";

export default {
  components: {
    PageHeader,
    ProjectInfo,
    HireMeFooter,
  },
  template: `
    <PageHeader :title="project.name">{{ project.summary }}</PageHeader>
    <ProjectInfo :companyName="project.companyName"></ProjectInfo>
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
