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
   <img src="https://cdna.artstation.com/p/assets/covers/images/027/977/014/large/alex-nice-alex-nice-thumb2.jpg?1593118996" alt="review image" />
   <div class="infos">
     <h1>{{ review.title }}</h1>
     <h3>{{ review.author }}</h3>
     <p>{{ review.created }}</p>
   </div>
  </div>
</template>

<style scoped>

  .review {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }

  .review img {
    width: 200px;
    height: 200px;
    margin-right: 1rem;
  }

</style>
