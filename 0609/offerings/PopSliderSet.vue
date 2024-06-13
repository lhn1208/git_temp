<script setup>
 import Range from './Range.vue'
 import { defineProps } from 'vue';
const props = defineProps({
  title: String,
  min: String,
  mid: String,
  max: String,
});
</script>
<template>
    <div class="set_container">
      <h3 class="title">{{title}}</h3>
      <Range :min="min" :mid="mid" :max="max" />
      <button class="btn_reset">초기화</button>
    </div>
</template>