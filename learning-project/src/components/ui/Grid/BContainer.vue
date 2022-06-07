<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
import { breakpoints } from "@/utils/constants.js";
export default {
  name: "BContainer",
  props: {
    fluid: Boolean,
    breakpoint: {
      type: String,
      validator(size) {
        return breakpoints.includes(size);
      },
    },
  },
  computed: {
    classList() {
      return [
        this.fluid ? "container-fluid" : "container",
        this.breakpoint ? `container-${this.breakpoint}` : "",
      ];
    },
  },
};
</script>

<style></style>
