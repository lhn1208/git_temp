<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import './offerings.css'
import RtContHeader from '../components/RtContHeader.vue';
import ItemBox from '../components/ItemBox.vue'
import Location from '../components/Location.vue'
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
    <div class="sub_content type hidden-overflow" id="content">  
        <div class="divide offerings_wrap">
          <!--left content-->
          <div class="left_container">
            <div class="content">
                <h2 class="title">추가 방문 요청</h2>
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
                      <div class="table_style bd_none">
                        <table>
                          <caption>매물정보 메인테이블</caption>
                          <colgroup>
                            <col width="16%">
                            <col width="34%">
                            <col width="16%">
                            <col>
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">해당층/건물층</th>
                              <td>{{ offering.floor }}</td>
                              <th scope="row">입주일</th>
                              <td>{{ offering.date  }}</td>
                            </tr>
                            <tr>
                              <th scope="row">웅자금</th>
                              <td>{{ offering.loan }}</td>
                              <th scope="row">관리비</th>
                              <td>{{ offering.manage }}</td>
                            </tr>
                            <tr>
                                <th scope="row">엘레베이터</th>
                                <td>{{ offering.elevator === 'Y' ? '있음' : '없음' }}</td>
                                <th scope="row">주차</th>
                                <td>{{ offering.park === 'Y' ? '가능' : '불가능' }}</td>
                              </tr>
                              <tr>
                                <th scope="row">입주 예정일</th>
                                <td>{{ offering.enterDate }}</td>
                                <th scope="row">반려동물</th>
                                <td>{{ offering.pet ==='Y' ? '가능' : '불가능' }}</td>
                              </tr>
                              <tr>
                                  <th scope="row">옵션</th>
                                  <td colspan="3">{{ offering.option }}</td>
                              </tr>
                              <tr>
                                  <th scope="row">특징</th>
                                  <td colspan="3"><span v-for="feature in splitFeatures(offering.feature)" :key="feature" class="label">{{ feature }}</span></td>
                              </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                </section>
                <section class="section">
                  <h3 class="title">매물정보</h3>
                  <div v-for="(offering, index) in offerDate" :key="index">
                    <div class=" bd_none">
                      <table>
                        <caption>매물정보 테이블</caption>
                        <colgroup>
                          <col width="16%">
                          <col width="34%">
                          <col width="16%">
                          <col>
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">매물 유형</th>
                            <td>공동주택 / 아파트</td>
                            <th scope="row">매물 용도</th>
                            <td>주거용</td>
                          </tr>
                          <tr>
                            <th scope="row">해당 동</th>
                            <td>102동</td>
                            <th scope="row">전용/공급면적</th>
                            <td>84.9㎡(25.7)/111.1㎡(33.6)</td>
                          </tr>
                          <tr>
                              <th scope="row">총 동수</th>
                              <td>3동</td>
                              <th scope="row">현관구조</th>
                              <td>계단식</td>
                            </tr>
                            <tr>
                              <th scope="row">총 주차수</th>
                              <td>300대(세대당 1대)</td>
                              <th scope="row">소재지</th>
                              <td>서울시 송파구 잠실동</td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
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
                  <Location title="서울시 송파구 잠실동(잠실주공1단지)"/>
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
                  title="추천매물"
                  currentCnt="0"
                  totalCnt="0"
                  text="(방문요청 가능매물/전체 추천매물)"
              />
              <div class="items_wrap">
                  <div class="item">
                      <ItemBox 
                          
                      />
                  </div>
              </div>
              <RtContHeader 
                  title="관심매물"
                  currentCnt="1"
                  totalCnt="1"
                  text="(현장방문 가능매물/전체 관심매물)"
                  colorClass="grass"
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
                          :visitChk="true"
                          optId="check1" 
                          date="23.08.10"
                      />
                  </div>
              </div>
          </aside>
        </div>

    </div>
</template>
<style scoped>
</style>