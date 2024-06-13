<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: String,
  titleClass: { type: String, default: '' },
  text1: String,
  text2: String,
  btnText: String,
  btnClass: {type: String, default: ''}
});
</script>
<template>
   <div class="top_tit_area">
      <h2 :class="titleClass">{{title}}</h2>
      <p class="text">{{text1}}<span v-if="text2">/{{ text2 }}</span></p>
      <!-- <button :class="[btnClass, 'btn_round ab_right']">{{ btnText }}</button> -->
      <RouterLink to="/newReq1" :class="[btnClass, 'btn_round ab_right']">{{ btnText }}</RouterLink>
   </div>
</template>
<style>
.top_tit_area{position: relative; padding:50px 240px 54px 104px}
.top_tit_area h2{margin-bottom: 20px; font-size: var(--font-big-tit); font-weight: 500;}
.top_tit_area .text{color: var(--c-bold-gray); font-size: 20px;}
.top_tit_area button{transform: translateY(-10%); right: 104px;}
</style>