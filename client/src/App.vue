<template>
  <div>
    <h1>Movie Reviews</h1>
    <ul>
      <li v-for="review in reviews" :key="review._id">
        <p>{{ review.title }}</p>
        <p>{{ review.author }}</p>
        <p>{{ review.created }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import API from './api/posts';

export default {
  data() {
    return {
      reviews: [],
    };
  },
  mounted() {
    API.fetchPosts()
      .then((response) => {
        this.reviews = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
