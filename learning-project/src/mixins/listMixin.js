const listMixin = {
  props: {
    items: Array,
  },
  data() {
    return {
      selectedItem: null,
      isSelect: false,
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
  },
  watch: {
    selectedItem(val) {
      this.isSelect = !!val;
    },
  },
  mounted() {
    console.log("list mixin mounted");
  },
};

export default listMixin;
