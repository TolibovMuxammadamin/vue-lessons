<template>
  <div class="app">
    {{ msg }}
    <button class="btn btn-primary">Btn</button>
    <input v-model="msg" type="text" />
    <Test></Test>
  </div>
</template>

<script>
import Test from "@/components/Test.vue";
export default {
  components: { Test },
  name: "App",
  data() {
    return {
      msg: "Hello Vue Project",
    };
  },
};
</script>
