<script setup lang="ts">
import API from '../api/posts';
import ReviewComponent from '@/components/ReviewComponent.vue';
import type { Post } from '@/types/Post';

import { onMounted , ref } from 'vue';

let reviews = ref<Post[]>([]);
let err;

onMounted(() => { 
  API.fetchPosts()
    .then((response) => {
        reviews.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  });
</script>

<template>
  <main>
    <div class="page">
      <div class="reviews">
        <ReviewComponent v-for="review in reviews" :review="review" v-bind:key="review._id" />
      </div>
    </div>
  </main>
</template>

<style scoped>

  .reviews {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }

</style>
