<script setup>
import Step from '../components/Step.vue';
import Location from '../components/Location.vue';
import './trading.css';
</script>
<template>
    <div id="content">
        <Step 
            linktoNext="saleNewReq2" 
            :prvBtShow="false" 
            :nextBtShow="true" 
            :step1="true"
            title="매도/임대 중개의뢰" 
            step1Txt="주소 입력"
        />
        <div class="sub_content request">
          <section>
            <h3 class="title f20">매물주소</h3>
            <div class="table_style">
              <table>
                  <caption>주소 검색으로 구성된 테이블</caption>
                  <colgroup>
                      <col width="18%">
                      <col>
                  </colgroup>
                  <tbody>
                      <tr>
                          <th scope="row" rowspan="2">주소 검색</th>
                          <td>
                              <div class="flex">
                                  <label class="screen_out" for="addrSch">주소 검색</label>
                                  <input type="text" id="addrSch" class="addr_input">
                                  <button class="btn_square bg emerald">주소 검색</button>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td class="bg_pink"><p class="desc mt0">※ 도로명, 지번, 건물명 등 통합검색이 가능합니다.</p></td>
                      </tr>
                  </tbody>
              </table>
            </div>
          </section>
          <section>
           <h3 class="title f20">이전 의뢰 부동산(<em class="f_red">3</em>)</h3>
           <div class="table_style bd_none">
            <table>
                <caption>이전 의뢰 부동산 테이블</caption>
                <colgroup>
                    <col width="14%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row" class="f_blue">아파트</th>
                        <td>
                            <div class="flex_both_ends">
                                <p>서울시 송파구 잠실동 321(잠실삼익그린아파트) 301동 102호</p>
                                <button class="btn_square basic">선택</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="f_blue">단독주택</th>
                        <td>
                            <div class="flex_both_ends">
                                <p>서울시 송파구 잠실동 321(잠실삼익그린아파트) 301동 102호</p>
                                <button class="btn_square basic">선택</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="f_blue">아파트</th>
                        <td>
                            <div class="flex_both_ends">
                                <p>서울시 송파구 잠실동 321(잠실삼익그린아파트) 301동 102호</p>
                                <button class="btn_square basic">선택</button>
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