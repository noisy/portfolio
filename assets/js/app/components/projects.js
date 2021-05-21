import ProjectThumbnail from "./projectThumbnail.js";
import { useFeaturedProjects } from "../composables/useFeaturedProjects.js";
import { setupIsotopeFilters } from "../../isotope-custom.js";

export default {
  components: { ProjectThumbnail },
  template: `
    <section class="section pt-5">
        <div class="container">
            <div class="text-center">
                <ul id="filters" class="filters mb-5 mx-auto ps-0">
                    <li class="type active" data-filter="*">All</li>
                    <li class="type" data-filter=".angular">Angular</li>
                    <li class="type" data-filter=".react">React</li>
                    <li class="type" data-filter=".python-django">Python/Django</li>
                    <li class="type" data-filter=".ruby-rails">Ruby/Rails</li>
                    <li class="type" data-filter=".android">Android</li>
                    <li class="type" data-filter=".ccpp">C/C++</li>
                    <li class="type" data-filter=".java">Java</li>
                    <li class="type" data-filter=".blockchain">Blockchain</li>
                </ul>
                <!--//filters-->
            </div>

            <div class="project-cards row mb-5 isotope">

                <!-- Opera -->
                <div class="isotope-item col-12 col-lg-4 angular python-django android java ccpp">
                    <div class="card rounded-0 border-0 shadow-sm mb-5">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="assets/images/projects/opera-mobile.png" alt="">
                            <div class="card-img-overlay overlay-logo text-center">
                                <div class="project-logo"><img class="img-fluid w-50 white"
                                        src="assets/images/logos/logo-opera.svg"></div>
                            </div>
                            <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                                <h5 class="card-title font-weight-bold">Client: Opera Software</h5>
                                <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur
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
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">C/C++</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Android</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Python</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Perl</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--//card-->
                </div>
                <!--//isotope-item-->

                <!-- SteemProjects & HiveProjects -->

                <div class="isotope-item col-12 col-lg-4 python-django blockchain">
                    <div class="card rounded-0 border-0 shadow-sm mb-5">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="assets/images/projects/project-2-thumb.jpg" alt="">
                            <div class="card-img-overlay overlay-logo text-center">
                                <div class="project-logo"><img class="img-fluid w-50"
                                        src="assets/images/logos/logo-2-inverse.svg"></div>
                            </div>
                            <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                                <h5 class="card-title font-weight-bold">Client: Steem & Hive Blockchain users</h5>
                                <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                            </a>
                        </div>
                        <div class="card-body pb-0">
                            <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                                    href="project.html">SteemProjects & HiveProjects</a></h4>
                        </div>

                        <div class="card-footer border-0 text-center bg-white pb-4">
                            <ul class="list-inline mb-0 mx-auto">
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Python</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Django</span>
                                </li>
                                <li class="list-inline-item"><span
                                        class="badge bg-secondary badge-pill">PostgresSQL</span></li>
                                <li class="list-inline-item"><span
                                        class="badge bg-secondary badge-pill">HTML/LESS</span></li>
                            </ul>
                        </div>
                    </div>
                    <!--//card-->
                </div>
                <!--//isotope-item-->

                <!-- SpisTresci -->

                <div class="isotope-item col-12 col-lg-4 react python-django">
                    <div class="card rounded-0 border-0 shadow-sm mb-5">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="assets/images/projects/project-3-thumb.jpg" alt="">
                            <div class="card-img-overlay overlay-logo text-center">
                                <div class="project-logo"><img class="img-fluid w-50"
                                        src="assets/images/logos/logo-3-inverse.svg"></div>
                            </div>
                            <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                                <h5 class="card-title font-weight-bold">My own startup</h5>
                                <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                            </a>
                        </div>
                        <div class="card-body pb-0">
                            <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                                    href="project.html">Search engine for Books, eBooks & audiobooks </a></h4>
                        </div>

                        <div class="card-footer border-0 text-center bg-white pb-4">
                            <ul class="list-inline mb-0 mx-auto">
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">React</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Python</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">MySQL</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Webpack</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--//card-->
                </div>
                <!--//isotope-item-->

                <div class="isotope-item col-12 col-lg-4 react">
                    <div class="card rounded-0 border-0 shadow-sm mb-5">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="assets/images/projects/project-4-thumb.jpg" alt="">
                            <div class="card-img-overlay overlay-logo text-center">
                                <div class="project-logo"><img class="img-fluid w-50"
                                        src="assets/images/logos/logo-4-inverse.svg"></div>
                            </div>
                            <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                                <h5 class="card-title font-weight-bold">Client: Dropbox</h5>
                                <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                            </a>
                        </div>
                        <div class="card-body pb-0">
                            <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                                    href="project.html">Internal Product</a></h4>
                        </div>

                        <div class="card-footer border-0 text-center bg-white pb-4">
                            <ul class="list-inline mb-0 mx-auto">
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">React</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Flux</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Babel</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">MongoDB</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--//card-->
                </div>
                <!--//isotope-item-->

                <div class="isotope-item col-12 col-lg-4 react php">
                    <div class="card rounded-0 border-0 shadow-sm mb-5">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="assets/images/projects/project-5-thumb.jpg" alt="">
                            <div class="card-img-overlay overlay-logo text-center">
                                <div class="project-logo"><img class="img-fluid w-50"
                                        src="assets/images/logos/logo-5-inverse.svg"></div>
                            </div>
                            <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                                <h5 class="card-title font-weight-bold">Client: Spotify</h5>
                                <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                            </a>
                        </div>
                        <div class="card-body pb-0">
                            <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                                    href="project.html">Mobile App</a></h4>
                        </div>

                        <div class="card-footer border-0 text-center bg-white pb-4">
                            <ul class="list-inline mb-0 mx-auto">
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">React</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">PHP</span></li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">MySQL</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--//card-->
                </div>
                <!--//isotope-item-->

                <div class="isotope-item col-12 col-lg-4 ruby-rails">
                    <div class="card rounded-0 border-0 shadow-sm mb-5">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="assets/images/projects/project-6-thumb.jpg" alt="">
                            <div class="card-img-overlay overlay-logo text-center">
                                <div class="project-logo"><img class="img-fluid w-50"
                                        src="assets/images/logos/logo-6-inverse.svg"></div>
                            </div>
                            <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                                <h5 class="card-title font-weight-bold">Client: Evernote</h5>
                                <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                            </a>
                        </div>
                        <div class="card-body pb-0">
                            <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                                    href="project.html">Web App &amp; Chrome Extension</a></h4>
                        </div>

                        <div class="card-footer border-0 text-center bg-white pb-4">
                            <ul class="list-inline mb-0 mx-auto">
                                <li class="list-inline-item"><span
                                        class="badge bg-secondary badge-pill">JavaScript</span></li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Ruby</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">HTML/CSS</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--//card-->
                </div>
                <!--//isotope-item-->

                <div class="isotope-item col-12 col-lg-4 angular php">
                    <div class="card rounded-0 border-0 shadow-sm mb-5">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="assets/images/projects/project-7-thumb.jpg" alt="">
                            <div class="card-img-overlay overlay-logo text-center">
                                <div class="project-logo"><img class="img-fluid w-50"
                                        src="assets/images/logos/logo-7-inverse.svg"></div>
                            </div>
                            <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                                <h5 class="card-title font-weight-bold">Client: Facebook</h5>
                                <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                            </a>
                        </div>
                        <div class="card-body pb-0">
                            <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                                    href="project.html">Facebook Ads Manager</a></h4>
                        </div>

                        <div class="card-footer border-0 text-center bg-white pb-4">
                            <ul class="list-inline mb-0 mx-auto">
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Angular</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">PHP</span></li>
                                <li class="list-inline-item"><span
                                        class="badge bg-secondary badge-pill">HTML/SaSS</span></li>
                            </ul>
                        </div>
                    </div>
                    <!--//card-->
                </div>
                <!--//isotope-item-->

                <div class="isotope-item col-12 col-lg-4 react python-django">
                    <div class="card rounded-0 border-0 shadow-sm mb-5">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="assets/images/projects/project-8-thumb.jpg" alt="">
                            <div class="card-img-overlay overlay-logo text-center">
                                <div class="project-logo"><img class="img-fluid w-50"
                                        src="assets/images/logos/logo-8-inverse.svg"></div>
                            </div>
                            <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                                <h5 class="card-title font-weight-bold">Client: Zendesk</h5>
                                <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                            </a>
                        </div>
                        <div class="card-body pb-0">
                            <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                                    href="project.html">Mobile App Development</a></h4>
                        </div>

                        <div class="card-footer border-0 text-center bg-white pb-4">
                            <ul class="list-inline mb-0 mx-auto">
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">React</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Django</span>
                                </li>
                                <li class="list-inline-item"><span
                                        class="badge bg-secondary badge-pill">HTML/SaSS</span></li>
                            </ul>
                        </div>
                    </div>
                    <!--//card-->
                </div>
                <!--//isotope-item-->


                <div class="isotope-item col-12 col-lg-4 angular python-django">
                    <div class="card rounded-0 border-0 shadow-sm mb-5">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="assets/images/projects/project-9-thumb.jpg" alt="">
                            <div class="card-img-overlay overlay-logo text-center">
                                <div class="project-logo"><img class="img-fluid w-50"
                                        src="assets/images/logos/logo-9-inverse.svg"></div>
                            </div>
                            <a class="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                                <h5 class="card-title font-weight-bold">Client: Coinbase</h5>
                                <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                            </a>
                        </div>
                        <div class="card-body pb-0">
                            <h4 class="card-title text-truncate text-center mb-0"><a class="text-link"
                                    href="project.html">App Development</a></h4>
                        </div>

                        <div class="card-footer border-0 text-center bg-white pb-4">
                            <ul class="list-inline mb-0 mx-auto">
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Angular</span>
                                </li>
                                <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Python</span>
                                </li>
                                <li class="list-inline-item"><span
                                        class="badge bg-secondary badge-pill">HTML/SaSS</span></li>
                            </ul>
                        </div>
                    </div>
                    <!--//card-->
                </div>
                <!--//isotope-item-->

            </div>
            <!--//row-->

        </div>
        <!--//container-->
    </section>
    <!--//section-->
  `,
  setup(props) {
    const { projects } = useFeaturedProjects();
    Vue.onMounted(setupIsotopeFilters);
    return { projects };
  },
};
