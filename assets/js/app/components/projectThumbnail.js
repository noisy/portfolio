const ProjectThumbnail = {
  props: {
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    summaryTitle: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    badges: {
      type: Array,
      default: [],
    },
    tags: {
      type: Array,
      default: [],
    },
    thumbnailLogo: {
      type: String,
      required: true,
    },
  },
  template: `
    <div class="isotope-item col-12 col-lg-4" :class="tags">
        <div class="card rounded-0 border-0 shadow-sm mb-5">
            <div class="card-img-container position-relative">
                <img class="card-img-top rounded-0"
                    :src="'assets/images/projects/' + thumbnail" alt="">
                <div class="card-img-overlay overlay-logo text-center">
                    <div class="project-logo"><img class="img-fluid w-50 white"
                            :src="'assets/images/logos/' + thumbnailLogo "></div>
                </div>
                <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                    <h5 class="card-title font-weight-bold">{{ summaryTitle }}</h5>
                    <p class="card-text">{{ summary }}</p>
                </a>
            </div>
            <div class="card-body pb-0">
                <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                        href="project.html">{{ name }} </a></h4>
            </div>

            <div class="card-footer border-0 text-center bg-white pb-4">
                <ul class="list-inline mb-0 mx-auto">
                    <li v-for="badge in badges" class="list-inline-item">
                      <span class="badge bg-secondary badge-pill">{{ badge }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `,
};

export default ProjectThumbnail;
