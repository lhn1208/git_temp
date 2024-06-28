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
  btnShow:Boolean
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
        <div v-if="btnShow" class="btn_wrap">
          <button class="btn_square red">전체 삭제</button>
          <button class="btn_square red">거래완료 삭제</button>
        </div>
    </header>
</template>