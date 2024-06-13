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
  btnText: {
    type: String,
    required: false
  },
});
</script>
<template>
    <div class="box_wrap intro_box">
        <div class="box">
            <h3 :class="[props.titleClass, 'tit']">{{title}}</h3>
            <p v-html="text" class="text"></p>
            <button class="btn_round bg ab_right">{{btnText}}</button>
        </div>
    </div>
</template>