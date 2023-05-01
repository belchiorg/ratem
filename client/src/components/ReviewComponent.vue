<script setup lang="ts">

defineProps ({
  review: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="review">
   <h1>{{ review.title }}</h1>
   <h3>{{ review.author }}</h3>
   <p>{{ review.created }}</p>
  </div>
</template>

<style scoped>

</style>
