<script setup>
import { ref } from 'vue';
import './trading.css'
import TopArea from '../components/TopArea.vue';
import Tab from '../common/Tab.vue';
import TradingBox from './TradingBox.vue';
import Paging from '../common/Paging.vue';
import GuideBox from '../common/GuideBox.vue';
const activeTab = ref('tab1');
const updateTab = (tab) => {
  activeTab.value = tab;
};
</script>
<template>
  <div class="sub_content">
    <TopArea  
      title="나의매도" 
      titleClass="f_blue" 
      text1="매물을 중개의뢰하시면 보다 빠르게 계약하실 수 있습니다." 
      btnText="신규 중개의뢰" 
      btnClass="bg" 
    />
    <Tab
      tabTit1="진행중"
      tabTit2="계약/종료"
      numIng="3"
      numContc="1"
      :numShow="true"
      :SelectShow="true"
      :offerType="true"
      @updateTab="updateTab"
      colorClass="trad_controls"
    />
    <div v-if="activeTab === 'tab1'">
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        :icoShow="true"
        icoTxt="미승인"
        :lists="{ 
          list1: { listTit: '고객관심', listVal:16 },
          list2: { listTit: '공인중개사 관심', listVal:13 },
          list3: { listTit: '방문요청', listVal:11 },
          list4: { listTit: '방문완료', listVal:11 }
        }"
        numClass="f_blue"  
      />
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        :icoShow="true"
        icoTxt="미등록"
        :lists="{ 
          list1: { listTit: '고객관심', listVal:16 },
          list2: { listTit: '공인중개사 관심', listVal:13 },
          list3: { listTit: '방문요청', listVal:11 },
          list4: { listTit: '방문완료', listVal:11 }
        }"
        numClass="f_blue"  
      />
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        :lists="{ 
          list1: { listTit: '고객관심', listVal:16 },
          list2: { listTit: '공인중개사 관심', listVal:35 },
          list3: { listTit: '방문요청', listVal:45 },
          list4: { listTit: '방문완료', listVal:44 }
        }"
        numClass="f_blue"  
      />
      <Paging />
    </div>
    <div v-else-if="activeTab === 'tab2'">
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        :lists="{ 
          list1: { listTit: '고객관심', listVal:0 },
          list2: { listTit: '공인중개사 관심', listVal:0 },
          list3: { listTit: '방문요청', listVal:0 },
          list4: { listTit: '방문완료', listVal:0}
        }"
        numClass="f_blue"  
      />
      <Paging />
    </div>
    <GuideBox :guides="{
      text1: `매물을 검색 후 <em class='f_red'>마음에 드는 매물을 관심매물로 등록</em>합니다.`,
      text2: `<em class='f_blue'>[신규의뢰 요청]</em>이나 매물정보 페이지에 있는 <em class='f_blue'>[방문요청]</em>을 클릭합니다.`,
      text3: `관심매물 중 <em class='f_red'>방문하고 싶은 매물을 선택</em>하고 <em class='f_red'>평점을 보고 마음에 드는 중개사를 선택</em> 후 <em class='f_red'>중개업소 방문시간을 선택</em>하면 중개의뢰가 완료됩니다.`,
      text4: `중개사가 승인 후 확인 차 바로 전화를 드리며 방문일에 방문하시면 요청한 모든 매물을 방문하실 수 있습니다.`
    }" />
  </div>
</template>