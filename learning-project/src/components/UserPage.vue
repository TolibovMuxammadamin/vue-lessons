<template>
  <div>
    <h1 :class="{ 'text-white': dark }" ref="heading">Users page</h1>
    <b-container>
      <AddUser @save="addUser" />
    </b-container>

    <InputField v-model="username" label="Username" prepend="@" append="Clear">
      <template #label="{ label }">
        <span class="badge bg-danger">{{ label }}</span>
      </template>
      <template #prepend>
        <i class="fa-solid fa-user"></i>
      </template>
      <template #append="{ append }">
        <button
          @click="username = ''"
          class="btn btn-outline-dark rounded-pill"
        >
          <i class="fa fa-remove"></i>
          {{ append }}
        </button>
      </template>
    </InputField>
    <DataTable :headers="headers" :items="users">
      <template #item.id="{ item }"> </template>
      <template v-slot:item.fullname="{ item }">
        {{ item.firstName + " " + item.lastName }}
      </template>
    </DataTable>
  </div>
</template>

<script>
import AddUser from "@/components/AddUser.vue";
import DataTable from "@/components/ui/DataTable/DataTable.vue";
import InputField from "@/components/ui/Form/InputField.vue";
import BContainer from "@/components/ui/Grid/BContainer.vue";
import TestLogin from "@/components/ui/TestLogin.vue";
export default {
  components: { DataTable, InputField, TestLogin, AddUser, BContainer },
  name: "UsersPage",
  inject: ["dark"],
  data() {
    return {
      username: "",
      users: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          age: 23,
          email: "jdoe@gmail.com",
        },
        {
          id: 2,
          firstName: "Dilshod",
          lastName: "Sirojov",
          age: 20,
          email: "dil_sirojov@gmail.com",
        },
        {
          id: 3,
          firstName: "Javohir",
          lastName: "Suyunboyev",
          age: 16,
          email: "javoh16best@gmail.com",
        },
        {
          id: 4,
          firstName: "Abduraxmon",
          lastName: "Ibrohimov",
          age: 17,
          email: "khamid4517super@gmail.com",
        },
      ],
      headers: [
        { text: "#", value: "id" },
        { text: "Email", value: "email" },
        { text: "Fullname", value: "fullname" },
        // { text: "LastName", value: "lastName" },
        { text: "Age", value: "age" },
      ],
    };
  },
  methods: {
    addUser(newUser) {
      newUser.id = this.users.at(-1).id + 1;
      this.users.push(newUser);
      this.$refs.heading.textContent = "New User added successfully!!!";
      this.$refs.heading.classList.add("text-center");
      this.$refs.heading.classList.add("text-success");
      setTimeout(() => {
        this.$refs.heading.textContent = "Users page";
        this.$refs.heading.classList.remove("text-center");
        this.$refs.heading.classList.remove("text-success");
      }, 3000);
    },
  },
  mounted() {},
};
</script>
