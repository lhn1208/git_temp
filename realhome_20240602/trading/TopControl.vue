<script setup>
import { defineProps, defineEmits, ref  } from 'vue';
const props = defineProps({
  numIng: String,
  numContc: String,
  offerType: Boolean,
});
const emit = defineEmits(['updateTab']);
const activeTab = ref('tab1'); //on클래스

const handleClick = (tab) => {
  activeTab.value = tab;
  emit('updateTab', tab);
};
</script>
<template>
   <div class="trad_controls">
    <div class="trad_btn">
        <button :class="{ on: activeTab === 'tab1' }" @click="handleClick('tab1')">진행중({{numIng}})</button>
        <button :class="{ on: activeTab === 'tab2' }" @click="handleClick('tab2')">계약/종료({{numContc}})</button>
    </div>
    <div class="select_area row">
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