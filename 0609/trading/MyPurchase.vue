<script setup>
import { ref } from 'vue';
import './trading.css'
import Tab from '../common/Tab.vue';
import Paging from '../common/Paging.vue';
import TopArea from '../components/TopArea.vue';
import TradingBox from './TradingBox.vue';
import GuideBox from '../common/GuideBox.vue';
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
    <Tab
      tabTit1="진행중"
      tabTit2="계약/종료"
      numIng="2"
      numContc="3"
      :numShow="true"
      :SelectShow="true"
      @updateTab="updateTab"
      colorClass="trad_controls"
    />
    <div v-if="activeTab === 'tab1'">
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        :icoShow="true"
        icoTxt="미등록"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        :lists="{ 
          list1: { listTit: '고객관심', listVal:0 },
          list2: { listTit: '공인중개사 관심', listVal:0 },
          list3: { listTit: '방문요청', listVal:3 },
          list4: { listTit: '방문완료', listVal:2 }
        }"
        numClass="f_red"  
      />
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        :lists="{ 
          list1: { listTit: '고객관심', listVal:12 },
          list2: { listTit: '공인중개사 관심', listVal:120 },
          list3: { listTit: '방문요청', listVal:3 },
          list4: { listTit: '방문완료', listVal:2 }
        }"
        numClass="f_red"  
      />
      <Paging />
    </div>
    <div v-else-if="activeTab === 'tab2'">
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        :lists="{ 
          list1: { listTit: '고객관심', listVal:10 },
          list2: { listTit: '공인중개사 관심', listVal:0 },
          list3: { listTit: '방문요청', listVal:3 },
          list4: { listTit: '방문완료', listVal:2 }
        }"
        numClass="f_red"  
      />
      <Paging />
    </div>
    <GuideBox :guides="{
      text1: `매물을 한 명의 공인중개사에게 의뢰하면 <em class='f_red'>모든 공인중개사가 공동중개를 위해 노력</em>합니다.`,
      text2: `고객관심, 중개사 관심과 방문요청, 방문완료 등의 방문현황을 실시간 확인하실 수 있습니다.`
    }" />
  </div>
</template>