import ProjectsGrid from "./projectsGrid.js";
import { useFeaturedProjects } from "../../../../src/composables/useFeaturedProjects.js";

export default {
  components: { ProjectsGrid },
  template: `
    <section class="section-featured-projects py-5">
        <div class="container">
            <h3 class="section-title font-weight-bold text-center mb-5">Featured Projects</h3>
            <ProjectsGrid :projects="projects"></ProjectsGrid>
            <div class="text-center">
                <router-link class="btn btn-primary" to="/projects">View all projects</router-link>
            </div>
        </div>
    </section>
  `,
  setup(props) {
    const { projects } = useFeaturedProjects();
    return { projects };
  },
};
