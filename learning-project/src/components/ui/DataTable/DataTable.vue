<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="value" scope="col">
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="header in headers" :key="header.value">
          <slot :name="`item.${header.value}`" :item="item">
            {{ item[header.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    items: Array,
    headers: Array,
  },
};
</script>

<style></style>
