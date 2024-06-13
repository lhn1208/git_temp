<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import './offerings.css'
import RtContHeader from '../components/RtContHeader.vue';
import ItemBox from '../components/ItemBox.vue'
import RtBtnBox from '../components/RtBtnBox.vue'
import OfferImg from './OfferImg.vue'
import OfferInfo from './OfferInfo.vue'

const offerDate = ref([
    { floor: '6/15층', 
      date: '2002.09(15년)', 
      loan: '시세 30% 미만', 
      manage: '10만원(TV,전기,수도)',
      elevator: 'Y', 
      park: 'Y', 
      enterDate:'즉시입주',
      pet:'N',
      option:'세탁기,냉장고,가스레인지,비데',
      feature:'복층,도배,대로변,신축'
      }
  ]);
const splitFeatures = (featureString) => {
  return featureString.split(',');
}

onMounted(() => {
  // 페이지가 로드된 후에 실행되는 부분
  document.body.classList.add('hidden-overflow');
});
onUnmounted(() => {
  // 컴포넌트가 파괴될 때 실행되는 부분
  document.body.classList.remove('hidden-overflow');
});
</script>
<template>
    <div class="sub_content type hidden-overflow">  
        <div class="divide offerings_wrap">
          <!--left content-->
          <div class="left_container">
            <div class="content">
                <h2 class="title">방문 요청</h2>
                <OfferImg />
                <div class="offer_info_list">
                    <OfferInfo 
                        title="월세보증금/월세"
                        content="1억1000/50"
                        type="amt"
                    />
                    <OfferInfo 
                        title="전용면적"
                        content="33.9㎡(10)"
                    />
                    <OfferInfo 
                        title="방수/욕실수"
                        content="원룸(개방형)/1개"
                    />
                </div>
                <section class="section offer_main">
                    <h3 class="offer_tit"><em class="f_blue">아파트</em> 잠실주공1단지 102동<i class="rd_ico red">급매</i></h3>
                    <div v-for="(offering, index) in offerDate" :key="index">
                    <table class="offer_tb">
                      <caption>매물정보 메인테이블</caption>
                      <colgroup>
                        <col width="16%">
                        <col width="34%">
                        <col width="16%">
                        <col>
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>해당층/건물층</th>
                          <td>{{ offering.floor }}</td>
                          <th>입주일</th>
                          <td>{{ offering.date  }}</td>
                        </tr>
                        <tr>
                          <th>웅자금</th>
                          <td>{{ offering.loan }}</td>
                          <th>관리비</th>
                          <td>{{ offering.manage }}</td>
                        </tr>
                        <tr>
                            <th>엘레베이터</th>
                            <td>{{ offering.elevator === 'Y' ? '있음' : '없음' }}</td>
                            <th>주차</th>
                            <td>{{ offering.park === 'Y' ? '가능' : '불가능' }}</td>
                          </tr>
                          <tr>
                            <th>입주 예정일</th>
                            <td>{{ offering.enterDate }}</td>
                            <th>반려동물</th>
                            <td>{{ offering.pet ==='Y' ? '가능' : '불가능' }}</td>
                          </tr>
                          <tr>
                              <th>옵션</th>
                              <td colspan="3">{{ offering.option }}</td>
                          </tr>
                          <tr>
                              <th>특징</th>
                              <td colspan="3"><span v-for="feature in splitFeatures(offering.feature)" :key="feature" class="label">{{ feature }}</span></td>
                          </tr>
                      </tbody>
                    </table>
                    </div>
                </section>
                <section class="section">
                  <h3 class="title">매물정보</h3>
                  <div v-for="(offering, index) in offerDate" :key="index">
                    <table class="offer_tb">
                      <caption>매물정보 테이블</caption>
                      <colgroup>
                        <col width="16%">
                        <col width="34%">
                        <col width="16%">
                        <col>
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>매물 유형</th>
                          <td>공동주택 / 아파트</td>
                          <th>매물 용도</th>
                          <td>주거용</td>
                        </tr>
                        <tr>
                          <th>해당 동</th>
                          <td>102동</td>
                          <th>전용/공급면적</th>
                          <td>84.9㎡(25.7)/111.1㎡(33.6)</td>
                        </tr>
                        <tr>
                            <th>총 동수</th>
                            <td>3동</td>
                            <th>현관구조</th>
                            <td>계단식</td>
                          </tr>
                          <tr>
                            <th>총 주차수</th>
                            <td>300대(세대당 1대)</td>
                            <th>소재지</th>
                            <td>서울시 송파구 잠실동</td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section class="section">
                  <h3 class="title">매물설명</h3>
                  <div class="box_wrap offer_desc">
                      <div class="box">
                          공인중개사가 작성한 설명이 나타납니다.<br>공인중개사가 작성한 설명이 나타납니다.<br>공인중개사가 작성한 설명이 나타납니다.
                      </div>
                  </div>
                </section>
                <section class="section">
                  <h3 class="title">위치</h3>
                  <div class="location_box">
                      <div class="addr">서울시 송파구 잠실동(잠실주공1단지)</div>
                      <div class="map">
                        <div><img src="@/assets/images/sub/sample/searchhose_map.jpg"></div>
                        <span class="navi">30m</span>
                        <button class="btn btn_square red">로드뷰</button>
                      </div>
                  </div>
                </section>
            </div>
          </div>
          <!--//left content-->
          <aside class="right_container offer_items">
              <div class="top_area">
                  <button class="btn_square">요청 전송</button>
                  <p class="desc">※ 방문하고 싶은 매물을 모두 선택 후, [요청 전송]을 누르십시오.</p>
              </div>
              <RtContHeader 
                  title="전체매물"
                  currentCnt="4"
                  totalCnt="5"
                  text="(방문요청 가능매물/전체 추천매물)"
              />
              <div class="items_wrap">
                  <div class="item">
                      <ItemBox 
                          alt="매물 이미지1" 
                          src="src/assets/images/main/offering_img1.jpg" 
                          price="매매 3억 5000" 
                          info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                          type="오피스텔" :labels="{label1:'욕실수리', label2:'도배'}"  
                          addr="잠실주공1단지 104동잠실"
                          onClass="on"
                      />
                      <RtBtnBox optId="check1" date="23.08.10"/>
                  </div>
                  <div class="item">
                      <ItemBox 
                          alt="매물 이미지1" 
                          src="src/assets/images/main/offering_img1.jpg" 
                          price="매매 3억 5000" 
                          info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                          type="빌라" :labels="{label1:'욕실수리', label2:'도배'}"  
                          addr="잠실주공1단지 104동잠실"
                      />
                      <RtBtnBox optId="check2" date="23.08.08"/>
                  </div>
                  <div class="item">
                      <ItemBox 
                          alt="매물 이미지1" 
                          src="src/assets/images/main/offering_img1.jpg" 
                          price="매매 3억 5000" 
                          info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                          type="아파트" :labels="{label1:'욕실수리', label2:'도배'}"  
                          addr="잠실주공1단지 104동잠실"
                      />
                      <RtBtnBox optId="check3" date="23.07.28"/>
                  </div>
                  <div class="item">
                      <ItemBox 
                          alt="매물 이미지1" 
                          src="src/assets/images/main/offering_img1.jpg" 
                          price="매매 3억 5000" 
                          info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                          type="아파트" :labels="{label1:'욕실수리', label2:'도배'}"  
                          addr="잠실주공1단지 104동잠실"
                      />
                      <RtBtnBox optId="check4" date="23.07.01"/>
                  </div>
                  <div class="item">
                      <ItemBox 
                          alt="매물 이미지1" 
                          src="src/assets/images/main/offering_img1.jpg" 
                          price="매매 3억 5000" 
                          info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                          type="아파트" :labels="{label1:'욕실수리', label2:'도배'}"  
                          addr="잠실주공1단지 104동잠실"
                      />
                     <RtBtnBox optId="check5" date="23.06.06"/>
                  </div>
              </div>
          </aside>
        </div>

    </div>
</template>
<style scoped>
</style>