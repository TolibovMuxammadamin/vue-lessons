<template>
  <div class="form-check form-switch">
    <input
      v-model="isDark"
      class="form-check-input"
      type="checkbox"
      role="switch"
      checked
    />
  </div>
</template>

<script>
export default {
  name: "DarkModeSwitch",
  inject: ["setDark", "dark"],
  data() {
    return {
      isDark: false,
    };
  },
  watch: {
    isDark(val) {
      this.setDark(val);
    },
  },
};
</script>

<style></style>
