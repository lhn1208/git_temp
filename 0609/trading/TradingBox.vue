<script setup>
import { defineProps, defineEmits, ref  } from 'vue';
const props = defineProps({
  title: String,
  icoShow:Boolean,
  icoTxt:String,
  offerInfo: String,
  lists: {
    type: Object,
    required: false,
    default: () => ({})
  },
  numClass:String
});
</script>
<template>
   <div class="box_wrap">
    <a href="#" class="box trading_box">
        <h3 class="title">{{title}}</h3><i class="rd_ico red" v-if="icoShow">{{icoTxt}}</i>
        <p>{{offerInfo}}</p>
        <ul class="list"><li v-for="(list, index) in lists" :key="index">{{list.listTit}}<span :class="numClass">{{list.listVal}}</span></li></ul>
    </a>
  </div>
</template>