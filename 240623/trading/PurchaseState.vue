<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import './trading.css';
import GuideBox from '../common/GuideBox.vue';
import Tab from '../common/Tab.vue'
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
            title="매수/임차 진행 현황" 
            titleClass="f_red" 
            text1="리얼하우스에 있는 모든 매물을 의뢰한 중개사에게 [방문요청]하실 수 있습니다." 
            btnText="목록보기" 
            btnClass="w200" 
            link="MyPurchase"
        />
        <AgentIntro profile="basic" :addInfo="true" :linkShow="true"/>
        <div class="table_style">
            <table>
                <caption>의뢰구분, 방문 예정일, 중개현황, 추가 방문요청으로 구성된 테이블</caption>
                <colgroup>
                    <col width="12%">
                    <col width="38%">
                    <col width="12%">
                    <col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="row">의뢰구분</th>
                        <th scope="row" colspan="3" class="al_left">
                            전세 | 아파트, 단독주택, 다가구주택
                            <span class="rd_ico red sm">오프라인 의뢰</span>
                            <span class="rd_ico blue sm">온라인 의뢰</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">방문 예정일</th>
                        <td><span class="f_red">23.08.09(화) 15:30</span> / <span class="f_red">23.08.11(목) 10:30</span></td>
                        <th scope="row">의뢰일</th>
                        <td>2023.09.06 15:20</td>
                    </tr>
                    <tr>
                        <th scope="row">중개현황</th>
                        <td colspan="3">
                            <div class="val_list">
                                <span>추천매물:<em class="f_red">10</em></span>
                                <span>방문요청:<em class="f_red">10</em></span>
                                <span>협의요청:<em class="f_red">10</em></span>
                                <span>방문완료:<em class="f_red">10</em></span>
                                <span>거래완료:<em class="f_red">10</em></span>
                                <span>방문취소:<em class="f_red">10</em></span>
                                <span>매물신고:<em class="f_red">10</em></span>
                                <span>시간오류:<em class="f_red">10</em></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">추가 방문요청</th>
                        <td>관심매물:15 / 추천매물:13 <button class="btn_round bg mid red" @click.prevent="navigate">추가 방문요청</button></td>
                        <th scope="row">담당 의뢰인</th>
                        <td>홍길동 010-0000-0000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--tab-->
        <div class="tab_container">
            <Tab
              tabTit1="매물방문 관리"
              tabTit2="의뢰인 관리"
              tabTit3="중개의뢰 관리"
              num2="3"
              @updateTab="updateTab"
            />
        </div>
        <!--//tab-->
       <!--tab1-->
        <div v-if="activeTab === 'tab1'" class="tab1">
            <ul class="trade_step">
             <li>
                <div class="top">
                  <div><span class="round">중</span><span class="text">중개사무소</span></div>
                </div>
              </li>
              <StepItem 
                stepTit="미"
                stepTxt="잠실주공1단지 103동(잠실동)/아파트"
                bgClass="gray"
                state="미협의"
                fontClass="f_gray"
                :reqNum="'<em class=\'f_red\'>03</em>20'"
                @toggle="handleToggle"
                :stepTableProps="{
                  offerTit: '전세 | 단독주택',
                  reqNum: '<em class=\'f_red\'>03</em>20',
                  addr: '서울시 송파구 잠실동',
                  visitTime: '-',
                  realVistTm: '<em class=\'f_red\'>중개사가 방문시간을 입력하지 않았습니다.</em>',
                  lastthTit: '요청일',
                  lastDate: '23.05.30(월) 8시 10분'
                }"
              />
              <StepItem 
                stepTit="협"
                stepTxt="잠실주공1단지 103동(잠실동)/아파트"
                bgClass="blue"
                state="협의완료"
                fontClass="f_blue"
                :reqNum="'<em class=\'f_red\'>03</em>20'"
                @toggle="handleToggle"
                :stepTableProps="{
                  offerTit: '전세 | 단독주택',
                  reqNum: '<em class=\'f_red\'>03</em>20',
                  addr: '서울시 송파구 잠실동12',
                  visitTime: '23.06.09(월) 16시 50분',
                  realVistTm: '<em class=\'f_red\'>23.06.09(월) 16시 50분</em>',
                  lastthTit: '협의일',
                  lastDate: '23.07.07(월) 10시 10분'
                }"
              />
              <StepItem 
                stepTit="완"
                stepTxt="잠실주공1단지 103동(잠실동)/아파트"
                bgClass="emerald"
                state="협의완료"
                fontClass="f_emerald"
                :reqNum="'<em class=\'f_red\'>03</em>20'"
                @toggle="handleToggle"
                :stepTableProps="{
                  offerTit: '전세 | 단독주택',
                  reqNum: '<em class=\'f_red\'>03</em>20',
                  addr: '서울시 송파구 잠실동12',
                  visitTime: '23.06.09(월) 16시 50분',
                  realVistTm: '<em class=\'f_red\'>23.06.09(월) 16시 50분</em>(방문완료)',
                  lastthTit: '방문완료',
                  lastDate: '23.07.07(월) 10시 10분',
                  btnshow:true
                }"
              />
              <StepItem 
                stepTit="오"
                stepTxt="잠실주공1단지 103동(잠실동)/아파트"
                bgClass="red"
                state="시간오류"
                fontClass="f_red"
                @toggle="handleToggle"
                :stepTableProps="{
                  offerTit: '전세 | 단독주택',
                  reqNum: '<em class=\'f_red\'>03</em>20',
                  addr: '서울시 송파구 잠실동12',
                  visitTime: '23.06.09(월) 16시 50분',
                  realVistTm: '<em class=\'f_red\'>23.06.09(월) 16시 50분</em>(현장방문시간이 잘못되었습니다.)',
                  lastthTit: '요청일',
                  lastDate: '23.07.07(월) 10시 10분',
                }"
              />
              <StepItem 
                stepTit="취"
                stepTxt="잠실주공1단지 103동(잠실동)/아파트"
                bgClass="red"
                state="방문취소"
                fontClass="f_red"
                @toggle="handleToggle"
                :stepTableProps="{
                  offerTit: '전세 | 단독주택',
                  reqNum: '<em class=\'f_red\'>03</em>20',
                  addr: '서울시 송파구 잠실동12',
                  visitTime: '-',
                  realVistTm: '-',
                  lastthTit: '방문취소',
                  lastDate: '23.07.07(월) 10시 10분',
                }"
              />
               
            </ul>
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
                      <th>담당자 선택</th>
                      <th>의뢰인 이름</th>
                      <th>휴대전화번호</th>
                      <th>구분</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="check1" class="checkbox">
                            <label for="check1"><span class="screen_out">담당자 선택</span></label>
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
                            <input type="checkbox" name="" id="check2" class="checkbox">
                            <label for="check2"><span class="screen_out">담당자 선택</span></label>
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
                <caption>의뢰일,방문일로 구성된 테이블</caption>
                <colgroup>
                    <col width="12%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">의뢰일</th>
                        <td class="al_left">2023.08.09 15:30</td>
                    </tr>
                    <tr>
                      <th scope="row">방문일(2)</th>
                      <td>23.08.09(화) 15:30 / 23.08.11(목) 10:30</td>
                    </tr>
                </tbody>
            </table>
          </div>
          <GuideBox :guides="{
            text1: `1. 더 이상 매수/임차를 진행할 의사가 없을 경우 [중개의뢰 종료]를 하십시오.`,
            text2: `2. <em class='f_red'>리얼하우스를 통해 계약한 경우</em> 방문현황 관리에서 계약된 매물을 선택해 방문완료 후, <em class='f_red'>계약 처리하시면 중개의뢰는 거래완료</em>됩니다.`
            }" />
        </div>
         <!--//tab3-->
     </div>
</template>