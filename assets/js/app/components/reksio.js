const Reksio = {
  data() {
    return {
      count: 0,
    };
  },
  props: {
    text: {
      type: Number,
      required: true,
    },
  },
  template: `
    <button @click="count++">
      [ {{text}} ] You clicked me {{ count }} times.
    </button>
    `,
};

export default Reksio;
