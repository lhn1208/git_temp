<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String, 
    required: false, 
    default: ''
  },
  type: {
    type: String,
    required: false
  }
});
</script>
<template>
    <dl>
        <dt>{{ title }}</dt>
        <dd>{{ content }}<span class="unit" v-if="type==='amt'">만원</span></dd>
    </dl>
</template>