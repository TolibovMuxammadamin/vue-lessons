<template>
  <div class="app">
    <div style="height: 500px">
      <b-container class="my-3">
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center">
            <div class="btn-group">
              <button @click="form = 'TestLogin'" class="btn btn-outline-dark">
                Login
              </button>
              <button
                @click="form = 'TestRegister'"
                class="btn btn-outline-dark"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </b-container>

      <keep-alive>
        <component
          :is="form"
          :email.sync="data.email"
          :username.sync="data.username"
          :password.sync="data.password"
        />
      </keep-alive>

      <!-- <TestLogin
        v-if="form === 'TestLogin'"
        :username.sync="loginData.username"
        :password.sync="loginData.password"
      />
      <TestRegister
        v-if="form === 'TestRegister'"
        :email.sync="registerData.email"
        :username.sync="registerData.username"
        :password.sync="registerData.password"
      /> -->
    </div>
  </div>
</template>

<script>
import BContainer from "./components/ui/Grid/BContainer.vue";
import TestLogin from "./components/ui/TestLogin.vue";
import TestRegister from "./components/ui/TestRegister.vue";
export default {
  components: { TestLogin, BContainer, TestRegister },
  name: "App",
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
      data: {
        email: "",
        username: "",
        password: "",
      },
      form: "TestLogin",
    };
  },
};
</script>
