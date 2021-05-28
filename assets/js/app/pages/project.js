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

    <div class="project-wrapper container py-5">
        <div class="row">
          <ProjectInfo
            class="col-12 col-lg-4 ps-lg-5"
            :companyName="project.companyName"
            :technologies="project.technologies"
          />
          <section class="col-12 col-lg-8">
            <slot></slot>
          </section>
        </div>
    </div>

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
