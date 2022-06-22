<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <form @submit.prevent="addUser" class="card">
        <div class="card-header">Add user</div>
        <div class="card-body">
          <input-field v-model="user.email" label="Email" />
          <input-field v-model="user.fullName" label="Full name" />
          <input-field v-model="user.age" label="age" />
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputField from "@/components/ui/Form/InputField.vue";
import BContainer from "@/components/ui/Grid/BContainer";
class User {
  constructor() {
    this.email = "";
    this.fullName = "";
    this.age = "";
  }
}
export default {
  name: "AddUser",
  components: { InputField, BContainer },
  data() {
    return {
      user: new User(),
    };
  },
  methods: {
    addUser() {
      const data = {
        ...this.user,
        firstName: this.user.fullName.split(" ")[0],
        lastName: this.user.fullName.split(" ")[1],
      };
      delete data.fullName;
      this.user = new User();
      this.$emit("save", data);
    },
  },
  mounted() {},
};
</script>

<style></style>
