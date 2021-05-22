import ProjectThumbnail from "./projectThumbnail.js";
import { useFeaturedProjects } from "../composables/useFeaturedProjects.js";

export default {
  components: { ProjectThumbnail },
  template: `
    <section class="section-featured-projects py-5">
        <div class="container">
            <h3 class="section-title font-weight-bold text-center mb-5">Featured Projects</h3>
            <div class="project-cards row mb-5">
            <project-thumbnail v-for="project in projects" :name="project.name" :thumbnail="project.thumbnail"
                    :summary-title="project.summaryTitle" :summary="project.summary" :tags="project.tags"
                    :badges="project.badges" :thumbnail-logo="project.thumbnailLogo"></project-thumbnail>

            </div>
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
