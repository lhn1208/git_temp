<script setup>
import { defineProps, defineEmits, ref  } from 'vue';
import StepTable from './StepTable.vue'

const props = defineProps({
  stepTit:String,
  stepTxt:String,
  reqTxt:String,
  state:String,
  reqNum:String,
  bgClass: {
    type: String, 
    default: ''
  },
  fontClass: {
    type: String, 
    default: ''
  },
   stepTableProps: {
    type: Object,
    default: () => ({})
  }
});

const emits = defineEmits(['toggle']);
//toggle
const showCont = ref(false);
const toggleBox = () => {
  showCont.value = !showCont.value;
   emits('toggle', showCont.value);
};
</script>
<template>
  <li :class="{ open: showCont }">
      <div class="top">
        <div><span :class="[bgClass, 'round']">{{stepTit}}</span>
          <button class="sep_btn" @click="toggleBox">{{stepTxt}} <i :class="['link_arr', showCont ? 'down' : 'up']">버튼 아이콘</i></button>
          <p  class="txt" v-if="reqTxt">{{reqTxt}}</p>
        </div>
        <div class="right">
          <span :class="[fontClass, 'state']">{{state}}</span>
          <span class="req_num" v-if="reqNum">요청번호: <span v-html="reqNum"></span></span>
        </div>
      </div>
      <div v-if="showCont">
         <StepTable v-bind="stepTableProps" />
      </div>
  </li>
</template>