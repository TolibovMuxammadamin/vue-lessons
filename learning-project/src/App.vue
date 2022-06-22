<template>
  <div :class="{ 'bg-dark': dark }">
    <div class="container">
      <DarkModeSwitch />
      <UserPage />
    </div>
  </div>
</template>

<script>
import DarkModeSwitch from "./components/DarkModeSwitch.vue";
import UserPage from "./components/UserPage.vue";
export default {
  components: {
    UserPage,
    DarkModeSwitch,
  },
  name: "App",
  data() {
    return {
      dark: false,
    };
  },
  provide() {
    return {
      setDark: this.setDark,
      dark: this.dark,
    };
  },
  methods: {
    setDark(val) {
      this.dark = val;
    },
  },
};
</script>
