<script setup>
import './agent.css';
import AgentInfoBox from './AgentInfoBox.vue'
import InfoBox from '../common/InfoBox.vue'
import TopArea from '../components/TopArea.vue';
import Profile from './Profile.vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const navigate = (link) => {
  if(link==='reqState')
  router.push(`/ReqState`);
};

</script>
<template>
    <main class="main agent content_w" id="content">
      <section class="top_info">
        <Profile profile="basic"/>
        <TopArea  
          title="홍길동" 
          text1="대표공인중개사/010-000-0000" 
          btnText="중개사무소 등록" 
          btnClass="bg"
          link=""
        />
        <div class="flex_end">
          <button class="f_blue btn">설정 바로가기<i class="link_arr">링크아이콘</i></button>
        </div>
      </section>
      <AgentInfoBox 
        wrapClass="sch_info"
        title="일정 관리"
        rTitle1="오늘일정"
        rTitle2="내일일정"
        rTitle3="모레일정"
        txtClass1="f_red"
        txtClass2="f_red"
        txtClass3="f_red"
        :rNum1="4"
        :rNum2="4"
        :rNum3="0"
        btnAddClass="mid"
        btnTxt1="일정 확인"
        link="schChk"
      />
      <AgentInfoBox
         wrapClass="manage_box"
        title="관리"
        rTitle1="관심매물"
        rTitle2="소속직원"
        rTitle3="포인트"
        txtClass1="f_red"
        txtClass2="f_red"
        txtClass3="f_red"
        :rNum1="4"
        :rNum2="3"
        :rNum3="1000"
        link1="1"
        link2="1"
        link3="1"
      />
      <div class="box_wrap req_state">
        <div class="box flex_both_ends">
          <div>
            <strong>요청내역</strong>
            <p>
              온라인 중개의뢰, 매물확인요청을 확인하십시오.
              <br>매수측 중개사가 방문 요청한 매물을 문의할 경우 [요청번호]를 통해 빠른 답변이 가능합니다.
            </p>
          </div>
          <button class="btn_round bg red mid" @click.prevent="navigate('reqState')">요청내역 확인</button>
        </div>
      </div>
      <section>
        <h2 class="title f20">금일 의뢰인 방문(<em class="f_red">2</em>)</h2>
        <div class="table_style bd_none">
          <table class="table">
              <caption>금일 의뢰인 방문 테이블</caption>
              <colgroup>
                  <col width="20%"> 
                  <col width="16%"> 
                  <col width="*"> 
              </colgroup>
              <tbody>
                  <tr>
                      <th scope="row">홍길동/010-0000-0000</th>
                      <td>방문요청 매물: 5개</td>
                      <td>
                          <div class="flex_both_ends">
                            <div>의뢰인 방문시간: <span class="f_red">10시 10분</span></div>
                            <button class="btn_round mid">중개현황</button>
                          </div>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">홍길동/010-0000-0000</th>
                      <td>방문요청 매물: 5개</td>
                      <td>
                          <div class="flex_both_ends">
                            <div>의뢰인 방문시간: <span class="f_red">15시 30분</span></div>
                            <button class="btn_round mid">중개현황</button>
                          </div>
                      </td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                    <td class="bg_pink al_center" colspan="3">※ 방문요청 매물을 등록한 매도측 중개사와 통화 후 현장 방문시간을 반드시 입력하십시오.</td>
                  </tr>
              </tfoot>
          </table>
        </div>
      </section>
      <section>
        <h2 class="title f20">금일 매물 안내(<em class="f_red">1</em>)</h2>
        <div class="table_style bd_none">
          <table class="table">
              <caption>금일 매물 안내 테이블</caption>
              <colgroup>
                  <col width="16%"> 
                  <col width="20%"> 
                  <col width="*"> 
              </colgroup>
              <tbody>
                  <tr>
                      <th scope="row">요청번호:02<span class="f_red">21</span></th>
                      <td>현장방문 예상시간: <span class="f_red">10시 10분</span></td>
                      <td>
                          <div class="flex_both_ends">
                            <div>서울시 송파구 잠실동 231-1(잠실주공1단지아파트) 103동 301호</div>
                            <button class="btn_round mid">방문현황</button>
                          </div>
                      </td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                    <td class="bg_pink al_center" colspan="3">※ 매수측 중개사가 방문하면 방문현황에서 방문완료로 처리하십시오.</td>
                  </tr>
              </tfoot>
          </table>
        </div>
      </section>
    </main>
</template>