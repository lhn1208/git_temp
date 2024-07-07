<script setup>
import TopArea from '../components/TopArea.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigate = (link) => {
  if(link==='reqManage')
  router.push(`/ReqManage`);
  if(link==='reqChk')
  router.push(`/ReqChk`);
};
</script>
<template>
  <div class="sub_content agent">
    <div class="req_chk_wrap">
      <TopArea  
          title="요청 내역" 
          titleClass="f_red"
          text1="온라인 중개의뢰 요청, 매물 확인요청, 현장 방문요청 내역을 확인하실 수 있습니다."
      />
      <section>
        <h3 class="title f20">온라인 중개의뢰 요청(<em class="f_red">2</em>)</h3>
        <div class="table_style bd_none">
            <table class="table">
                <caption>온라인 중개의뢰 요청 테이블</caption>
                 <colgroup>
                    <col width="18%"> 
                    <col width="20%"> 
                    <col width="*"> 
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" class="f_red">매수/임차 중개의뢰 요청</th>
                    <td>요청일: 23.09.03 21:30</td>
                    <td>
                      <div class="flex_both_ends">
                        전세 | 아파트, 단독주택, 다가구 주택
                        <button class="btn_round mid" @click.prevent="navigate('reqManage')">의뢰관리</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="f_blue">매도/임대 중개의뢰 요청</th>
                    <td>요청일: 23.09.03 21:30</td>
                    <td>
                      <div class="flex_both_ends">
                        전세 | 아파트 | 서울시 송파구 잠실동(잠실주공아파트)
                        <button class="btn_round mid" @click.prevent="navigate('reqManage')">의뢰관리</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
      </section>
      <section>
        <h3 class="title f20">온라인 학인 요청(<em class="f_red">2</em>)</h3>
        <div class="table_style bd_none">
            <table class="table">
                <caption>온라인 학인 요청 테이블</caption>
                 <colgroup>
                    <col width="18%"> 
                    <col width="20%"> 
                    <col width="*"> 
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" class="f_blue">매물 확인 요청</th>
                    <td>요청일: 23.09.03 21:30</td>
                    <td>
                      <div class="flex_both_ends">
                        매매 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호
                        <button class="btn_round mid" @click.prevent="navigate('reqChk')">요청관리</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="f_blue">매물 확인 요청</th>
                    <td>요청일: 23.09.03 21:30</td>
                    <td>
                      <div class="flex_both_ends">
                        전세 | 아파트 | 서울시 송파구 잠실동(잠실주공아파트)
                        <button class="btn_round mid" @click.prevent="navigate('reqChk')">요청관리</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
      </section>
      <section>
        <h3 class="title f20">현장 방문요청(<em class="f_red">4</em>)</h3>
        <div class="table_style pd20">
          <table class="table req_tb">
              <caption>현장 방문요청 테이블</caption>
                <colgroup>
                  <col width="14%"> 
                  <col width="*"> 
              </colgroup>
              <tbody>
                <tr>
                  <th rowspan="3" scope="row" class="bold">03<em class="f_blue">26</em></th>
                  <td>
                     <div class="flex_both_ends">
                        홍길동(은성공인중개사무소) 010-0000-0000/의뢰인: 김길동
                        <span class="date">요청일: 23.09.03 21:30</span>
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>전세/월세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호</td>
                </tr>
                <tr>
                  <td>현장방문 예상시간: <span class="f_red">방문시간 협의 후, 매수측 중개사에게 현장도착 예상시간 입력을 요청하십시오.</span></td>
                </tr>
                <tr>
                  <td class="pd10 state" colspan="2">
                    <div class="flex_end">
                      <span class="f_red">미협의</span>
                      <button class="btn_round mid">매물현황</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th rowspan="3" scope="row" class="bold">05<em class="f_blue">26</em></th>
                  <td>
                     <div class="flex_both_ends">
                        홍길동(은성공인중개사무소) 010-0000-0000/의뢰인: 김길동
                        <span class="date">요청일: 23.09.03 21:30</span>
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>전세/월세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호</td>
                </tr>
                <tr>
                  <td>현장방문 예상시간: <span class="f_red">23.09.09(수) 14시 30분</span>(다소 차이가 있을 수 있음)</td>
                </tr>
                <tr>
                  <td class="pd10 state" colspan="2">
                     <div class="flex_end">
                      <span><span class="f_blue">협의완료: </span>23.09.06 13:20</span>
                      <button class="btn_round mid">매물현황</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th rowspan="3" scope="row" class="bold">07<em class="f_blue">24</em></th>
                  <td>
                     <div class="flex_both_ends">
                        홍길동(은성공인중개사무소) 010-0000-0000/의뢰인: 김길동
                        <span class="date">요청일: 23.09.03 21:30</span>
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>전세/월세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호</td>
                </tr>
                <tr>
                  <td>현장방문 예상시간: <span class="f_red">23.09.09(수) 14시 30분</span>(방문완료)</td>
                </tr>
                <tr>
                  <td class="pd10 state" colspan="2">
                     <div class="flex_end">
                      <span><span class="f_emerald">방문완료: </span>23.09.06 13:20</span>
                      <button class="btn_round mid">매물현황</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th rowspan="3" scope="row" class="bold">01<em class="f_blue">24</em></th>
                  <td>
                     <div class="flex_both_ends">
                        홍길동(은성공인중개사무소) 010-0000-0000/의뢰인: 김길동
                        <span class="date">요청일: 23.09.03 21:30</span>
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>전세/월세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호</td>
                </tr>
                <tr>
                  <td>현장방문 예상시간: <span class="f_red">23.09.09(수) 14시 30분</span>(방문취소)</td>
                </tr>
                <tr>
                  <td class="pd10 state" colspan="2">
                     <div class="flex_end">
                      <span><span class="f_red">방문취소: </span>23.09.06 13:20</span>
                      <button class="btn_round mid">매물현황</button>
                    </div>
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
       </section>
    </div>
  </div>
</template>