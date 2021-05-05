const Testimonial = {
  props: ["author", "title", "body", "pictureUrl", "url"],
  template: `
    <div class="testimonial-item">
        <div class="position-relative p-5 shadow">
            <blockquote class="blockquote ps-4">
                <p class="mb-4">{{ body }}</p>
                <i class="quote-icon fas fa-quote-left fa-lg position-absolute text-primary"></i>
                <footer class="blockquote-footer presudo-hidden mt-4">
                    <div class="row client-profile">
                        <div class="col-12 col-md-auto">
                            <img :src="pictureUrl" alt="" class="rounded-circle">
                        </div>
                        <div class="col">
                            <cite title="Source" class="quote-source d-inline-block font-style-normal pt-3">
                                <span class="d-block">{{ author }}</span>
                                <span class="d-block">{{ title }}</span>
                                <span class="d-block position-absolute source-link"><i
                                        class="fab fa-linkedin fa-2x me-1" data-fa-transform="down-3"></i>
                                    <a class="text-secondary text-link" :href="url" target="_blank">View on
                                        Linkedin <i class="fas fa-external-link-alt ms-1"
                                            data-fa-transform="up-1"></i></a></span>
                            </cite>
                        </div>
                    </div>
                </footer>
            </blockquote>
        </div>
    </div>
    `,
};

export default Testimonial;
