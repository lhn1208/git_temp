<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import './trading.css';
import GuideBox from '../common/GuideBox.vue';
import Tab from '../common/Tab.vue'
import CheckBox from '../common/CheckBox.vue'
import TopArea from '../components/TopArea.vue';
import AgentIntro from '../agent/AgentIntro.vue';
import StepItem from './StepItem.vue'
import StepTable from './StepTable.vue'
const activeTab = ref('tab1');
const updateTab = (tab) => {
  activeTab.value = tab;
};
const showCont = ref(false);
const handleToggle = (value) => {
  showCont.value = value;
};
const router = useRouter();
const navigate = () => {
  router.push(`/addVisitReq`);
};
</script>
<template>
    <div class="sub_content request" id="content">
        <TopArea  
            title="매도/임대 진행 현황" 
            titleClass="f_blue" 
            text1="모든 중개사가 공동중개를 통해 매물 계약을 위해 노력하고 있습니다." 
            btnText="목록보기" 
            btnClass="w200" 
            link="MySale"
        />
        <AgentIntro profile="basic" 
          :addInfo="true" :linkShow="true"/>
        <div class="table_style">
            <table>
                <caption>의뢰구분, 의뢰 부동산, 의뢰 금액, 중개현황, 담당 의뢰인으로 구성된 테이블</caption>
                <colgroup>
                    <col width="12%">
                    <col width="30%">
                    <col width="12%">
                    <col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="row">의뢰구분</th>
                        <th colspan="3" class="al_left">
                            전세/월세 | 아파트
                            <span class="rd_ico red sm">오프라인 의뢰</span>
                            <span class="rd_ico blue sm">온라인 의뢰</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">의뢰 부동산</th>
                        <td>매물 부동산</td>
                        <th scope="row">요청일</th>
                        <td>2023.09.06 15:20</td>
                    </tr>
                    <tr>
                        <th scope="row">의뢰 금액</th>
                        <td colspan="3">전세보증금: 2억 5000만원 | 월세보증금/월세: 1억/30만원, 1억1000/25만원 </td>
                    </tr>
                    <tr>
                        <th scope="row">중개 현황</th>
                        <td colspan="3">
                          <div class="flex gap100">
                              <span>고객 관심: <em class="f_red">31</em>/125</span>
                              <span>중개사 관심: <em class="f_red">10</em>/60</span>
                              <span>방문요청: <em class="f_red">6</em></span>
                              <span>방문완료: <em class="f_red">6</em></span>
                          </div>
                        </td>
                    </tr>
                    <tr>
                      <th scope="row">담당 의뢰인</th>
                      <td>홍길동 010-111-0101</td>
                      <th>매물사진</th>
                      <td><span class="f_red">매물사진 미등록(사지을 등록하시면 거래가 빠르게 이뤄집니다/중개사에게 요청)</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--tab-->
        <div class="tab_container">
            <Tab
              tabTit1="중개 현황"
              tabTit2="의뢰인 관리"
              tabTit3="중개의뢰 관리"
              num1="4"
              num2="3"
              @updateTab="updateTab"
            />
        </div>
      <!--//tab-->
       <!--tab1-->
        <div v-if="activeTab === 'tab1'" class="tab1">
           <div class="table_style table">
            <table>
              <caption>중개 현황 테이블</caption>
              <colgroup>
                  <col width="18%">
                  <col>
                  <col width="10%">
                  <col width="30%">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">현장방문 예상시간</th>
                  <td>-</td>
                  <th scope="row">요청일</th>
                  <td>2023.06.10 17:20</td>
                </tr>
                <tr class="bg_sky">
                  <th class="f_red">미협의</th>
                  <td colspan="3">-</td>
                </tr>
                <tr>
                  <th scope="row">현장방문 예상시간</th>
                  <td>-</td>
                  <th scope="row">요청일</th>
                  <td>2023.06.10 17:20</td>
                </tr>
                <tr class="bg_sky">
                  <th class="f_blue">협의완료</th>
                  <td colspan="3">-</td>
                </tr>
                <tr>
                  <th scope="row">현장방문 예상시간</th>
                  <td>-</td>
                  <th scope="row">요청일</th>
                  <td>2023.06.10 17:20</td>
                </tr>
                <tr class="bg_sky">
                  <th class="f_emerald">방문완료</th>
                  <td colspan="3">-</td>
                </tr>
                <tr>
                  <th scope="row">현장방문 예상시간</th>
                  <td>-</td>
                  <th scope="row">요청일</th>
                  <td>2023.06.10 17:20</td>
                </tr>
                <tr class="bg_sky">
                  <th class="f_red">방문취소</th>
                  <td colspan="3">-</td>
                </tr>
              </tbody>
            </table>
           </div>
            <GuideBox :guides="{
              text1: `1. 매물의 현장방문 현황을 실시간 확인하실 수 있습니다.`,
              text2: `2. 미협의, 협의 완료, 방문완료, 방문취소로 구분됩니다.`
            }" />
        </div>
        <!--//tab1-->
        <!--tab2-->
        <div v-if="activeTab === 'tab2'" class="tab2">
           <div class="table_style bd_none table">
            <table>
              <caption>의뢰인 관리 테이블</caption>
              <colgroup>
                  <col width="18%">
                  <col>
              </colgroup>
              <tbody>
                <tr>
                    <th scope="row">홍길동 <span class="rd_ico yg sm">담당자</span></th>
                    <td>010-0000-0000 <span class="rd_ico emerald sm">승인</span>
                      <button class="ab_right btn_square basic">수정/삭제</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">홍길동</th>
                    <td>010-0000-0000 <span class="rd_ico red sm">미승인</span>
                       <button class="ab_right btn_square red">수정/삭제</button>
                    </td>
                </tr>
                 <tr>
                    <th scope="row">홍길동</th>
                    <td>010-0000-0000 <span class="rd_ico gray sm">미가입</span>
                     <button class="ab_right btn_square disable">수정/삭제</button>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
          <section>
            <h3 class="title">의뢰인 등록/수정</h3>
            <div class="table_style bd_none table center">
              <table> 
                  <caption>담당자 선택, 의뢰인 이름, 휴대전화번호, 구분으로 구성된 의뢰인 등록/수정 테이블</caption>
                  <colgroup>
                      <col width="12%">
                      <col width="28%">
                      <col width="*">
                      <col width="22%">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">담당자 선택</th>
                      <th scope="col">의뢰인 이름</th>
                      <th scope="col">휴대전화번호</th>
                      <th scope="col">구분</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>
                          <CheckBox optId="check1" :labelTxt="'<span class=\screen_out\>담당자 선택</span>'"/>
                        </td>
                        <td>
                          <input type="text" title="의뢰인 이름 입력하세요." placeholder="이름 입력" class="w200">
                        </td>
                        <td>
                          <input type="text" title="휴대전화번호 입력하세요." placeholder="휴대전화번호 숫자만 입력" class="w200">
                        </td>
                        <td><button class="btn_square basic">추가</button></td>
                    </tr>
                    <tr>
                        <td>
                            <CheckBox optId="check2" :labelTxt="'<span class=\screen_out\>담당자 선택</span>'"/>
                        </td>
                        <td>
                          <input type="text" title="의뢰인 이름 입력하세요." placeholder="이름 입력" class="w200">
                        </td>
                        <td>
                          <input type="text" title="휴대전화번호 입력하세요." placeholder="휴대전화번호 숫자만 입력" class="w200">
                        </td>
                        <td><div class="flex">
                            <button class="btn_square basic">수정</button>
                            <button class="btn_square basic">삭제</button>
                          </div>
                        </td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </section>    
            <GuideBox :guides="{
            text1: `1. 의뢰인은 전체 <em class='f_red'>4명까지 등록</em> 하실 수 있습니다.`,
            text2: `2. 의뢰인을 등록하시면 해당 의뢰인이 <em class='f_red'>중개의뢰를 같이 관리</em>하실 수 있습니다.`,
            text3: `3. 담당자는 공인중개사와 주로 연락할 분을 선택하십시오.`
            }" />
          </div>
      
        <!--//tab2-->
        <!--tab3-->
        <div v-if="activeTab === 'tab3'">
          <div class="table_style">
            <table>
                <caption>의뢰일,의뢰 부동산으로 구성된 테이블</caption>
                <colgroup>
                    <col width="12%">
                    <col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="row">의뢰일</th>
                        <th class="al_left">2023.08.09 15:30</th>
                    </tr>
                    <tr>
                      <th scope="row">의뢰 부동산</th>
                      <td>매물 부동산</td>
                    </tr>
                </thead>
            </table>
          </div>
          <GuideBox :guides="{
            text1: `1. 의뢰한 공인중개사를 통하지 않고 거래가 완료된 경우 중개의뢰 종료를 하십시오.`,
            text2: `2. <em class='f_red'>의뢰한 공인중개사를 통해 계약한 경우 공인중개사가 계약완료로 처리하게 됩니다.</em>`
            }" />
        </div>
         <!--//tab3-->
     </div>
</template>