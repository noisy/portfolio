import ProjectThumbnail from "./projectThumbnail.js";
import { useDB } from "../composables/useDB.js";
import { setupIsotopeFilters } from "../../isotope-custom.js";

export default {
  components: { ProjectThumbnail },
  template: `
    <section class="section pt-5">
        <div class="container">
            <div class="text-center">
                <ul id="filters" class="filters mb-5 mx-auto ps-0">
                    <li class="type active" data-filter="*">All</li>
                    <li v-for="{tag, name} in projectFilters" class="type" :data-filter="tag">{{name}}</li>
                </ul>
            </div>

            <div class="project-cards row mb-5 isotope">
                <project-thumbnail
                  v-for="project in projects"
                  :name="project.name"
                  :thumbnail="project.thumbnail"
                  :summary-title="project.summaryTitle"
                  :summary="project.summary"
                  :tags="project.tags"
                  :badges="project.badges"
                  :thumbnail-logo="project.thumbnailLogo" />

            </div>
        </div>
    </section>
  `,
  setup(props) {
    const { projects, projectFilters } = useDB();
    Vue.onMounted(setupIsotopeFilters);
    return { projects, projectFilters };
  },
};
