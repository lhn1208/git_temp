<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  titleClass:{
    type: String, 
    required: false, 
    default: ''
  },
  text: {
    type: String,
    required: true
  },
});
</script> 
<template>
     <a href="#" class="box pd0">
          <h2 :class="[props.titleClass, 'row']">{{title}}</h2>
          <div v-html="text" class="cont"></div>
     </a>
</template>