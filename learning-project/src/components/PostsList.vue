<template></template>

<script>
import listMixin from "@/mixins/listMixin";
export default {
  name: "PostsList",
  mixins: [listMixin],
  props: {
    post: Object,
  },
  mounted() {
    console.log("posts list mounted");
  },
};
</script>

<style></style>
