<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  colorClass: {
    type: String, 
    required: false, 
    default: ''
  },
  currentCnt: {
    type: String,
    required: false
  },
  totalCnt: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: false
  }
});
</script>
<template>
    <header :class="[colorClass, 'offer_header']">
        <strong>
            <span class="tit">{{ title }}:</span>
            <span v-if=currentCnt>{{ currentCnt }}/</span>{{ totalCnt }}
        </strong>
        <span class="text">{{ text }}</span>
    </header>
</template>