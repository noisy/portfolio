export default {
  props: ["filters"],
  template: `
    <div class="text-center">
        <ul id="filters" class="filters mb-5 mx-auto ps-0">
            <li class="type active" data-filter="*">All</li>
            <li v-for="{tag, name} in filters" class="type" :data-filter="tag">{{name}}</li>
        </ul>
    </div>
  `,
};
