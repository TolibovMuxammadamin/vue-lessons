<template>
  <BContainer>
    <button @click="$router.go(-1)" class="btn btn-info">Back</button>
    <h1>Post View</h1>
    <button @click="fetchPost" class="btn btn-primary mb-3">Refresh</button>
    <div v-if="!loading" class="card">
      <div class="card-header">
        {{ post.title }}
      </div>
      <div class="card-body">
        {{ post.body }}
      </div>
    </div>
    <div v-else class="text-center">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </BContainer>
</template>

<script>
import BContainer from "@/components/ui/Grid/BContainer.vue";
export default {
  components: { BContainer },
  name: "PostView",
  data() {
    return {
      post: null,
      loading: false,
    };
  },
  methods: {
    async fetchPost() {
      this.loading = true;
      const postId = this.$route.params.id;
      const { data } = await this.$axios.get(`posts/${postId}`);
      this.post = data;
      this.loading = false;
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style></style>
