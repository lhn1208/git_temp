<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title:String,
  currentCnt:String,
  totalCnt:String,
  text:String,
  colorClass: {
    type: String, 
    default: ''
  },
});
</script>
<template>
    <header :class="[colorClass, 'cont_header']">
        <strong>
            <span class="tit">{{ title }}</span>
            <span v-if="currentCnt || totalCnt">:</span>
            <span v-if=currentCnt>{{ currentCnt }}/</span>{{ totalCnt }}
        </strong>
        <span class="text">{{ text }}</span>
    </header>
</template>