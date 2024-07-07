<script setup>
import { defineProps, defineEmits, ref, onMounted,watch   } from 'vue';
const props = defineProps({
  tabTit1:String,
  tabTit2:String,
  tabTit3:String,
  num1: String,
  num2: String,
  addClass: {
    type: String, 
    default: ''
  },
  initialTab: {
    type: String,
    default: 'tab1',
  },
});
const emit = defineEmits(['updateTab']);
//const activeTab = ref('tab1'); //on클래스
const activeTab = ref(props.initialTab);

const handleClick = (tab) => {
  activeTab.value = tab;
  emit('updateTab', tab);
};

// onMounted 훅을 사용하여 컴포넌트가 마운트될 때 tab2를 활성화
onMounted(() => {
  if (props.initialTab) {
    activeTab.value = props.initialTab;
    emit('updateTab', props.initialTab);
  }
});

watch(() => props.initialTab, (newTab) => {
  if (newTab) {
    activeTab.value = newTab;
    emit('updateTab', newTab);
  }
});
</script>
<template>
   <div class="tab_btn">
        <button :class="{ on: activeTab === 'tab1' }" @click="handleClick('tab1')">{{tabTit1}}<span v-if="num1">({{num1}})</span></button>
        <button :class="{ on: activeTab === 'tab2' }" @click="handleClick('tab2')">{{tabTit2}}<span v-if="num2">({{num2}})</span></button>
        <button :class="{ on: activeTab === 'tab3' }" @click="handleClick('tab3')" v-if="tabTit3">{{tabTit3}}</button>
    </div>
</template>