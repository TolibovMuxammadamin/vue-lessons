<template>
  <div>
    <div v-if="value">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  props: {
    value: Boolean,
  },
};
</script>

<style></style>
