<script setup>
import TopArea from '../../components/TopArea.vue';
import CheckBox from '../../common/CheckBox.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigate = (link) => {
  if(link==='reqState')
  router.push(`/ReqState`);
};
</script>
<template>
  <div class="sub_content agent">
    <div class="req_chk_wrap ">
      <TopArea  
          title="매물 확인요청" 
          titleClass="f_red"
          text1="리얼하우스에 있는 모든 매물을 의뢰한 중개사에게 [방문요청]하실 수 있습니다." 
      />
      <section>
        <div class="flex_both_ends title_area">
          <h3 class="title f20">매물 정보</h3>
          <span class="date">등록일: 2023.04.06</span>
        </div>
        <div class="table_style">
            <table class="table">
                <caption>확인요청 매물,담당의뢰인,최종매물 확인일으로 구성된 테이블</caption>
                <colgroup>
                    <col width="14%"> 
                    <col width="20%"> 
                    <col width="14%"> 
                    <col width="*"> 
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">확인요청 매물</th>
                        <td colspan="3">
                          <div class="flex_both_ends">
                              <div>전세 | 아파트 | 서울시 송파구 잠실동 231-1(잠실주공1단지아파트) 103동 301호</div>
                              <button class="btn_round bg mid blue">매물 중개현황</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                      <th scope="row">담당 의뢰인</th>
                      <td>홍길동 010-0000-0000</td>
                      <th scope="row">추가 의뢰인</th>
                      <td>홍길동 010-0000-0000/김세미(세입자) 010-0000-0000</td>
                    </tr>
                    <tr>
                      <th scope="row">최종 매물 확인일</th>
                      <td colspan="3">23.05.02(10일 전)</td>
                    </tr>
                </tbody>
            </table>
          </div>
      </section>
      <section>
        <div class="flex_both_ends title_area">
          <h3 class="title f20 f_blue">매물 확인요청</h3>
          <span class="date">요청일: 2023.04.06 14:30</span>
        </div>
        <div class="table_style">
          <table class="table">
              <caption>확인요청 매물,담당의뢰인,최종매물 확인일으로 구성된 테이블</caption>
              <colgroup>
                <col width="14%"> 
                <col width="*"> 
              </colgroup>
              <tr>
                <th scope="row">거래 가능여부</th>
                <td>
                  <div class="flex">  
                    <CheckBox radio="true" optId="check1" labelTxt="거래가능" radio_nm="deal_chk"/>
                    <CheckBox radio="true" optId="check2" labelTxt="거래완료(매물종료)" radio_nm="deal_chk"/>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">안내</th>
                <td class="bg_pink">
                  <ul class="list">
                    <li>1. 의뢰인과 통화 후, 거래가능 여부를 입력하십시오.</li>
                    <li>2. 계약서 작성 전까지는 거래가능으로 처리하십시오.(가계약을 했을 경우 거래 가능으로 처리하십시오.)</li>
                    <li>3. 리얼하우스를 통해 계약하셨을 경우 매물 중개현황에서 방문완료 후, 계약 처리하십시오.</li>
                  </ul>
                </td>
              </tr>
          </table>
        </div>
       </section>
       <div class="btnarea both_ends">
          <button class="btn_square basic" @click.prevent="navigate('reqState')">취소</button>
          <button class="btn_square">확인</button>
       </div>
    </div>
  </div>
</template>