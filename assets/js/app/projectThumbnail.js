const ProjectThumbnail = {
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <div class="isotope-item col-12 col-lg-4 angular python-django android java ccpp">
        <div class="card rounded-0 border-0 shadow-sm mb-5">
            <div class="card-img-container position-relative">
                <img class="card-img-top rounded-0"
                    src="assets/images/projects/project-opera-mobile.png" alt="">
                <div class="card-img-overlay overlay-logo text-center">
                    <div class="project-logo"><img class="img-fluid w-50 white"
                            src="assets/images/logos/logo-opera.svg"></div>
                </div>
                <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                    <h5 class="card-title font-weight-bold">Client: Opera Software</h5>
                    <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                </a>
            </div>
            <div class="card-body pb-0">
                <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                        href="project.html">Opera Mobile for Android</a></h4>
            </div>

            <div class="card-footer border-0 text-center bg-white pb-4">
                <ul class="list-inline mb-0 mx-auto">
                    <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Java</span>
                    </li>
                    <li class="list-inline-item"><span
                            class="badge bg-secondary badge-pill">C/C++</span>
                    </li>
                    <li class="list-inline-item"><span
                            class="badge bg-secondary badge-pill">Android</span>
                    </li>
                    <li class="list-inline-item"><span
                            class="badge bg-secondary badge-pill">Python</span>
                    </li>
                    <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Perl</span>
                    </li>
                </ul>
            </div>
        </div>
        <!--//card-->
    </div>
    <!--//isotope-item-->
    `,
};

export default ProjectThumbnail;
