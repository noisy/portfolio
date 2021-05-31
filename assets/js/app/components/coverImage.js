export default {
  props: ["url"],
  template: `
    <div class="mb-5">
        <img class="img-fluid" :src="url" alt="">
    </div>
  `,
};
