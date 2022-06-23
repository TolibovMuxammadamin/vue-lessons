<template>
  <div>
    <div class="container my-3">
      <h4>Posts</h4>

      <ul v-if="posts.length > 0" class="list-group">
        <li v-for="post in posts" class="list-group-item">
          {{ post.title | trim | capitalize }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      posts: [],
    };
  },
  filters: {
    capitalize(str) {
      return str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
    },
    trim(str) {
      return str.trim();
    },
  },
  methods: {},
  async mounted() {
    const { data } = await this.$axios.get("posts", {
      params: {
        _limit: 10,
      },
    });
    this.posts = data;
    console.log(data);
  },
};
</script>
