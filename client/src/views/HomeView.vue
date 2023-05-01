<script setup lang="ts">
import API from '../api/posts';
import ReviewComponent from '@/components/ReviewComponent.vue';

import { onMounted , ref } from 'vue';

let reviews = ref([]);

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

</style>
