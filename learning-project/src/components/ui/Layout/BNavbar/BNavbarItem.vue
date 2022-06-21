<template>
  <li class="nav-item">
    <a :href="to" class="nav-link" :class="{ disabled: disable, active }">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: "BNavbarItem",
  props: {
    to: String,
    disable: Boolean,
    active: Boolean,
  },
};
</script>

<style></style>
