import ProjectThumbnail from "./projectThumbnail.js";
import ProjectsGrid from "./projectsGrid.js";
import { useDB } from "../composables/useDB.js";

export default {
  components: { ProjectThumbnail, ProjectsGrid },
  template: `
    <section class="section pt-5">
        <div class="container">
            <slot name="header">
              <div class="text-center">
                  <ul id="filters" class="filters mb-5 mx-auto ps-0">
                      <li class="type active" data-filter="*">All</li>
                      <li v-for="{tag, name} in projectFilters" class="type" :data-filter="tag">{{name}}</li>
                  </ul>
              </div>
            </slot>

            <projects-grid :projects="projects"/>
        </div>
    </section>
  `,
  setup(props) {
    const { projects, projectFilters } = useDB();
    return { projects, projectFilters };
  },
};
