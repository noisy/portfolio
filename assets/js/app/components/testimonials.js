import Testimonial from "./testimonial.js";

export default {
  components: { Testimonial },
  props: ["testimonials"],
  template: `
    <section class="section-proof section bg-white py-5">
        <div class="container-fluid">
            <div class="testimonials">
                <testimonial v-for="t in testimonials" :author="t.author" :body="t.body" :title="t.title"
                    :picture-url="t.pictureUrl" :type="t.type">
                </testimonial>
            </div>
        </div>
    </section>
  `,
};
