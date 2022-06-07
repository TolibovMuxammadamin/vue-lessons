<template>
  <nav class="navbar" :class="classList">
    <slot></slot>
  </nav>
</template>

<script>
import { breakpoints } from "@/utils/constants.js";
export default {
  name: "BNavbar",
  props: {
    bgColor: {
      type: String,
      default: "light",
    },
    breakpoint: {
      type: String,
      validator(size) {
        return breakpoints.includes(size);
      },
    },
    sticky: {
      type: String,
      validator(val) {
        return ["top", "bottom"].includes(val);
      },
    },
    fixed: {
      type: String,
      validator(val) {
        return ["top", "bottom"].includes(val);
      },
    },
    light: Boolean,
    dark: Boolean,
  },
  computed: {
    classList() {
      return [
        this.breakpoint ? `navbar-expand-${this.breakpoint}` : "navbar-expand",
        this.sticky ? `sticky-${this.sticky}` : "",
        this.fixed ? `fixed-${this.fixed}` : "",
        this.light ? "navbar-light" : "",
        this.dark ? "navbar-dark" : "",
        `bg-${this.bgColor}`,
      ];
    },
  },
};
</script>

<style lang="scss"></style>
