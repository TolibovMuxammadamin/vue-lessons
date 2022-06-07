<template>
  <div class="app">
    <div style="height: 800px">
      {{ msg }}
      <button class="btn btn-primary">Btn</button>
      <input v-model="msg" type="text" />
      <Test></Test>
    </div>
    <b-navbar fixed="top" bg-color="primary" dark>
      <b-container>
        <b-navbar-brand>Food App</b-navbar-brand>
      </b-container>
    </b-navbar>
    <div style="height: 800px">
      {{ msg }}
      <button class="btn btn-primary">Btn</button>
      <input v-model="msg" type="text" />
      <Test></Test>
    </div>
  </div>
</template>

<script>
import Test from "@/components/Test.vue";
import BContainer from "@/components/ui/Grid/BContainer";
import BNavbar from "@/components/ui/Layout/BNavbar/BNavbar.vue";
import BNavbarBrand from "@/components/ui/Layout/BNavbar/BNavbarBrand.vue";
export default {
  components: { Test, BNavbar, BContainer, BNavbarBrand },
  name: "App",
  data() {
    return {
      msg: "Hello Vue Project",
    };
  },
};
</script>
