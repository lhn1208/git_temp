<script setup>
import { defineProps, watch } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  noticeTit: {
    type: Array,
    required: false,
    default: () => []
  },
});

watch(() => props.noticeTit, (newVal) => {
  console.log('noticeTit:', newVal);
}, { immediate: true });
</script>

<template>
  <div class="box">
    <h2 class="row">{{ title }}</h2>
    <div class="cont">
      <div v-for="(notice, index) in noticeTit" :key="index">
        <a href="#">{{ notice.text }} <i v-if="notice.isNew" class="ico"> NEW</i></a>
        <span class="date">{{ notice.date }}</span>
      </div>
    </div>
    <button class="more">더보기</button>
  </div>
</template>