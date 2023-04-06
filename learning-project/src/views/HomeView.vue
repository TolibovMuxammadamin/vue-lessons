<template>
  <b-container>
    <h1>Home page</h1>
    <!-- <button
      @click="$router.push({ name: 'about' })"
      class="btn btn-secondary mb-3"
    >
      About
    </button> -->
    <router-link
      :to="{ name: 'about' }"
      tag="button"
      class="btn btn-secondary mb-3"
    >
      About
    </router-link>

    <ul class="list-group">
      <li
        v-for="postItem in postList"
        :key="postItem.id"
        @click="toPost(postItem.id)"
        class="list-group-item"
      >
        <!-- <router-link :to="`/post/${postItem.id}`">
          {{ postItem.title }}
        </router-link> -->
        {{ postItem.title }}
      </li>
    </ul>
  </b-container>
</template>

<script>
import BContainer from "@/components/ui/Grid/BContainer.vue";
export default {
  components: { BContainer },
  name: "HomeView",
  data() {
    return {
      postList: [],
    };
  },
  methods: {
    toPost(id) {
      this.$router.push({ name: "post", params: { id } });
    },
  },
  async mounted() {
    const { data } = await this.$axios.get("/posts", {
      params: { _limit: 10 },
    });
    this.postList = data;
  },
};
</script>

<style></style>
