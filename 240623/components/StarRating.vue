<script setup>
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    required: false,
    default: 0
  },
  initialRating: {
    type: Number,
    required: false,
    default: 0
  },
  type: {
    type: String,
    default: ''
  }
});

const internalRating = ref(props.initialRating || props.rating);

watch(() => props.initialRating, (newRating) => {
  internalRating.value = newRating;
});

watch(() => props.rating, (newRating) => {
  internalRating.value = newRating;
});

const setRating = (index) => {
  if (props.type === 'register') {
    internalRating.value = index + 1;
  }
};
</script>
<template>
  <div class="star_rating">
    <span v-for="(star, index) in 5" 
          :key="index" 
          :class="{ on: index < internalRating }"
          @click="setRating(index)">
    </span>
  </div>
</template>
<style>
.star_rating span{display: inline-block; width: 17px;height: 16px; margin-left: 4px; background-image: url("/src/assets/images/sub/grade_star_small2.png"); background-repeat: no-repeat;}
.star_rating span.on{ background-image: url("/src/assets/images/sub/grade_star_small2_on.png");}
</style>