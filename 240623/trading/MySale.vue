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
  <div class="sub_content" id="content">
    <TopArea  
      title="나의매도" 
      titleClass="f_blue" 
      text1="매물을 중개의뢰하시면 보다 빠르게 계약하실 수 있습니다." 
      btnText="신규 중개의뢰" 
      btnClass="bg" 
      link=salenewReq1
    />
    <!--tab-->
    <div class="tab_container flex_both_ends">
        <Tab
          tabTit1="진행중"
          tabTit2="계약/종료"
          num1="3"
          num2="1"
          @updateTab="updateTab"
        />
        <div class="select_area row">
          <select>
            <option value="">계약/종료 선택</option>
            <option value="">전체</option>
            <option value="">계약완료</option>
            <option value="">계약종료</option>
          </select>
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
    <!--//tab-->
    <div v-if="activeTab === 'tab1'">
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        icoTxt="의뢰종료"
        contrtDate="계약등록일: 23.10.09 13:20(홍길동)"
        link="saleState"
      />
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        icoTxt="계약완료"
        icoBg="grass"
        contrtDate="계약등록일: 23.09.09 13:20(홍길동)" 
        link="saleState"
      />
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        contrtDate="계약등록일: 23.09.09 13:20(홍길동)" 
        link="saleState"
      />
      <Paging />
    </div>
    <div v-else-if="activeTab === 'tab2'">
      <TradingBox 
        title="홍길동(은성공인중개사사무소)"
        offerInfo="전세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
        contrtDate="계약등록일: 23.09.09 13:20(홍길동)" 
        link="saleStateEnd"
      />
      <Paging />
    </div>
    <GuideBox :guides="{
        text1: `매물을 한 명의 공인중개사에게 의뢰하면<em class='f_red'>모든 공인중개사가 공동중개를 위해 노력</em>합니다.`,
        text2: `고객관심, 중개사 관심과 방문요청, 방문완료 등의 방문현황을 실시간 확인하실 수 있습니다.`
      }" 
      bulletClass="dot"
    />
  </div>
</template>