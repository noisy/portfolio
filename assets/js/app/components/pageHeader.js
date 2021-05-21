export default {
  props: ["title"],
  template: `
    <div class="header-intro theme-bg-primary text-white py-5">
        <div class="container">
            <h2 class="page-heading mb-3">{{title}}</h2>
            <div class="page-heading-tagline"><slot/>
            </div>
        </div>
    </div>
    `,
};
