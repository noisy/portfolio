export default {
  props: ["companyName"],
  template: `
            <aside class="project-sidebar col-12 col-lg-4 ps-lg-5">
                <div class="project-sidebar-inner bg-white p-4">
                    <div class="sidebar-row mb-5">
                        <h3 class="sidebar-title mb-4">Project Info</h3>
                        <ul class="list-unstyled ps-2">
                            <li class="mb-4"><i class="fas fa-building me-3 text-primary"
                                    data-fa-transform="grow-6 down-2"></i><strong>Company:</strong> {{ companyName }}</li>
                            <li class="mb-4"><i class="fas fa-external-link-alt me-3 text-primary"
                                    data-fa-transform="grow-6 down-2"></i><strong>Site Link:</strong> <a
                                    href="#">website.com</a></li>
                            <li><i class="fas fa-wrench me-3 text-primary"
                                    data-fa-transform="grow-6 down-2"></i><strong>Type:</strong> Frontend &amp; Backend
                            </li>
                        </ul>
                    </div>
                    <div class="sidebar-row">
                        <h3 class="sidebar-title mb-3">Technologies Used</h3>
                        <div class="webdev-icons row mb-5 justify-content-center">

                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/angular.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/react.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/nodejs.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/javascript.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/jquery-alt.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/html5.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/css3.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/sass.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/less.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/python.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/ruby.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/php.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/postgresql.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/mysql-alt.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/mongodb-alt.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/grunt.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/webpack.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/bootstrap4.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/flux.svg"></div>
                            <div class="webdev-icon col-3 col-xl-2 me-0 mb-4"><img class="img-fluid"
                                    src="/assets/images/webdev-icons/vue.svg"></div>

                        </div>
                    </div>
                    <!--//section-row-->
                </div>
                <!--//project-sidebar-inner-->
            </aside>
    `,
};
