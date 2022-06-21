<template>
  <b-container>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <input-field
              :value="username"
              @input="(value) => $emit('update:username', value)"
              label="Username"
            />
            <input-field
              :value="password"
              @input="(value) => $emit('update:password', value)"
              label="Password"
              type="password"
            />
            <button class="btn btn-primary">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import InputField from "./Form/InputField.vue";
import BContainer from "@/components/ui/Grid/BContainer";
export default {
  name: "TestLogin",
  components: { InputField, BContainer },
  props: {
    username: String,
    password: String,
  },
};
</script>

<style></style>
