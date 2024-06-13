<script setup>
import { defineProps  } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
});
</script>
<template>
  <div class="star_rating">
      <span v-for="(star, index) in 5" 
          :key="index" 
          :class="{ on: index < rating }">
    </span>
  </div>
</template>
<style>
.star_rating span{display: inline-block; width: 17px;height: 16px; margin-left: 4px; background-image: url("/src/assets/images/sub/grade_star_small2.png"); background-repeat: no-repeat;}
.star_rating span.on{ background-image: url("/src/assets/images/sub/grade_star_small2_on.png");}
</style>