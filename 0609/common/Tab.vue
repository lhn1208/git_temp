<script setup>
import { defineProps, defineEmits, ref  } from 'vue';
const props = defineProps({
  tabTit1:String,
  tabTit2:String,
  numShow: Boolean,
  numIng: String,
  numContc: String,
  SelectShow: Boolean,
  offerType: Boolean,
  colorClass: {
    type: String, 
    default: ''
  },
});
const emit = defineEmits(['updateTab']);
const activeTab = ref('tab1'); //on클래스

const handleClick = (tab) => {
  activeTab.value = tab;
  emit('updateTab', tab);
};
</script>
<template>
   <div :class="[colorClass, 'tab_container']">
    <div class="tab_btn">
        <button :class="{ on: activeTab === 'tab1' }" @click="handleClick('tab1')">{{tabTit1}}<span v-if="numShow">({{numIng}})</span></button>
        <button :class="{ on: activeTab === 'tab2' }" @click="handleClick('tab2')">{{tabTit2}}<span v-if="numShow">({{numContc}})</span></button>
    </div>
    <div class="select_area row" v-if="SelectShow">
      <select>
        <option value="">거래구분 선택</option>
        <option value="">전체</option>
        <option value="">매매</option>
        <option value="">전세</option>
        <option value="">월세</option>
        <option value="">단기임대</option>
      </select>
      <select v-if="offerType">
        <option value="">매물유형 선택</option>
        <option value="">전체</option>
        <option value="">매매</option>
        <option value="">전세</option>
        <option value="">월세</option>
        <option value="">단기임대</option>
      </select>
    </div>
</div>
</template>