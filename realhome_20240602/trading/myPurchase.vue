<script setup>
import { ref } from 'vue';
import './trading.css'
import TopArea from '../components/TopArea.vue';
import TopControl from './TopControl.vue';
const activeTab = ref('tab1');
const updateTab = (tab) => {
  activeTab.value = tab;
};
</script>
<template>
  <div class="sub_content">
    <TopArea  
      title="나의매수" 
      titleClass="f_red" 
      text1="매수/임차 중개의뢰를 통해 보다 좋은 매물을 빠르게 계약하실 수 있습니다." 
      btnText="신규 중개의뢰" 
      btnClass="bg" 
    />
    <TopControl
      numIng="2"
      numContc="3"
      @updateTab="updateTab"
    />
    <div v-if="activeTab === 'tab1'">
      첫번째 탭내용
    </div>
    <div v-else-if="activeTab === 'tab2'">
      두번째 탭내용
    </div>
  </div>
</template>