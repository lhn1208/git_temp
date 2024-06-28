<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  addClass:String,
  optId:String,
  labelTxt:String,
  radio:Boolean,
  radio_nm:String
});
</script>
<template>
<div>
   <div :class="['check_form', addClass]" v-if="radio">
      <input type="radio" class="checkbox" :id="optId" :name="radio_nm">
      <label :for="optId" v-html="labelTxt"></label>
    </div>
   <div v-else :class="['check_form', addClass]">
      <input type="checkbox" class="checkbox" :id="optId">
      <label :for="optId" v-html="labelTxt"></label>
    </div>
</div>
</template>