<template>
  <b-container>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <input-field
              :value="email"
              @input="(value) => $emit('update:email', value)"
              label="Email"
            />
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
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
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
  name: "TestRegister",
  components: { InputField, BContainer },
  props: {
    username: String,
    email: String,
    password: String,
  },
};
</script>

<style></style>
