<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import './offerings.css'
import RtContHeader from '../components/RtContHeader.vue';
import ItemBox from '../components/ItemBox.vue'
import Location from '../components/Location.vue'
import OfferImg from './OfferImg.vue'
import OfferInfo from './OfferInfo.vue'
import AgentIntro from '../agent/AgentIntro.vue';
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

//popup open
const isPopupOpen = ref(false);
const openPopup = () => {
  isPopupOpen.value = true;
};
const closePopup = () => {
  isPopupOpen.value = false;
};
</script>
<template>
    <div class="sub_content type hidden-overflow" id="content">  
        <!--방문요청 팝업-->
        <div :class="['full_cover', { on: isPopupOpen }]"></div>
        <div :class="['popup_wrap', 'pop_visit_req', { on: isPopupOpen }]">
          <div class="popup">
            <button class="btn_close" aria-label="닫기" @click="closePopup"></button>
            <h3 class="title">방문 요청</h3>
            <div class="table_style">
              <table>
                  <caption>해당 동,해당 층,안내로 구성된 테이블</caption>
                  <colgroup>
                      <col width="14%">
                      <col>
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">중개의뢰 선택</th>
                      <td>
                          <select class="w100per">
                            <option value="">전세 | 아파트, 단독주택, 다가구주택/2023.03.09</option>
                            <option value="">매매 | 아파트/2023.06.10</option>
                            <option value="">월세 | 단독주택/2023.06.10</option>
                          </select>
                          <div class="flex agent">
                            <figure>
                              <span><img alt="중개사사진" src="@/assets/images/sub/sample/img_agent.png" /></span>
                            </figure>
                            <figcaption>
                                <strong>홍길동(중개법인잠실은성공인우개사사무소)</strong>
                                <ul>
                                  <li>서울시 송파구 잠실동 321-1(대성빌딩) 301호</li>
                                  <li>의뢰일: 2018.09.06</li>
                                </ul>
                            </figcaption>
                          </div>
                          <button class="btn_square red ab_right">추가 방문요청</button>
                      </td>
                    </tr>
                    <tr class="bg_pink">
                      <th scope="row">안내</th>
                      <td>관심매물로 등록 후, 해당 매수/임차 중개의뢰 현황에서 한번에 추가 현장확인 요청하실 수 있습니다.</td>
                    </tr>
                  </tbody>
              </table>
            </div>
            <div class="flex_end grp">
              <button class="btn_square basic">신규 중개의뢰 요청</button>
            </div>
          </div>
        </div>
        <!--//방문요청 팝업-->
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
                    <div class="table_style bd_none">
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
                  <button class="btn_square" @click="openPopup">요청 전송</button>
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
                          :visitChk="true"
                          optId="check1" 
                          date="23.08.10"
                      />
                  </div>
                  <div class="item">
                      <ItemBox 
                          alt="매물 이미지1" 
                          src="src/assets/images/main/offering_img1.jpg" 
                          price="매매 3억 5000" 
                          info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                          type="빌라" :labels="{label1:'욕실수리', label2:'도배'}"  
                          addr="잠실주공1단지 104동잠실"
                          :dealEnd="true"
                          :visitChk="true"
                          optId="check2" 
                          date="23.08.08"
                          :disabled="true"
                      />
                  </div>
                  <div class="item">
                      <ItemBox 
                          alt="매물 이미지1" 
                          src="src/assets/images/main/offering_img1.jpg" 
                          price="매매 3억 5000" 
                          info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                          type="아파트" :labels="{label1:'욕실수리', label2:'도배'}"  
                          addr="잠실주공1단지 104동잠실"
                          :seen="true"
                          :visitChk="true"
                          optId="check3" 
                          date="23.07.20"
                          :disabled="true"
                      />
                  </div>
                  <div class="item">
                      <ItemBox 
                          alt="매물 이미지1" 
                          src="src/assets/images/main/offering_img1.jpg" 
                          price="매매 3억 5000" 
                          info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                          type="아파트" :labels="{label1:'욕실수리', label2:'도배'}"  
                          addr="잠실주공1단지 104동잠실"
                          :visitChk="true"
                          optId="check4" 
                          date="23.07.01"
                      />
                  </div>
                  <div class="item">
                      <ItemBox 
                          alt="매물 이미지1" 
                          src="src/assets/images/main/offering_img1.jpg" 
                          price="매매 3억 5000" 
                          info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                          type="아파트" :labels="{label1:'욕실수리', label2:'도배'}"  
                          addr="잠실주공1단지 104동잠실"
                          :visitChk="true"
                          optId="check5" 
                          date="23.07.01"
                      />
                  </div>
              </div>
          </aside>
        </div>

    </div>
</template>
<style scoped>
</style>