<template>
  <div class="app">
    <div class="container my-3">
      <InputField
        v-model="username"
        label="Username"
        prepend="@"
        append="Clear"
      >
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
          {{ item.firstName + item.lastName }}
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import DataTable from "./components/ui/DataTable/DataTable.vue";
import InputField from "./components/ui/Form/InputField.vue";
export default {
  components: { DataTable, InputField },
  name: "App",
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
};
</script>
