import ProjectThumbnail from "../../../../src/components/projectThumbnail.js";
import { setupIsotopeFilters } from "../../isotope-custom.js";

export default {
  components: { ProjectThumbnail },
  props: ["projects"],
  template: `
    <div class="container">
        <div class="project-cards row mb-5 isotope">
            <project-thumbnail
              v-for="project in projects"
              class="isotope-item"
              :name="project.name"
              :slug="project.slug"
              :thumbnail="project.thumbnail"
              :summary-title="project.summaryTitle"
              :summary="project.summary"
              :tags="project.tags"
              :badges="project.badges"
              :thumbnail-logo="project.thumbnailLogo" />

        </div>
    </div>
  `,
  setup(props) {
    Vue.onMounted(setupIsotopeFilters);
  },
};
