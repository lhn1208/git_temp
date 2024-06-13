<script setup>
import { ref } from 'vue';
import './trading.css';
import Tab from '../common/Tab.vue';
import InfoBox from '../common/InfoBox.vue';
import Step from '../components/Step.vue';
import StarRating from '../components/StarRating.vue';
import RtContHeader from '../components/RtContHeader.vue';
import RtBtnBox from '../components/RtBtnBox.vue';
import AgentIntro from '../agent/AgentIntro.vue';
import OfferAgentInfo from './OfferAgentInfo.vue'
const activeTab = ref('tab1');

const updateTab = (tab) => {
  activeTab.value = tab;
};

</script>
<template>
    <div>
        <Step linktoPrev="newReq2" linktoNext="newReq4" :prvBtShow="true" :nextBtShow="true" :step3="true"/>
        <div class="sub_content">
            <div class="divide request">
                 <!--left content-->
                 <div class="left_container h_add">
                    <div class="content">
                        <AgentIntro />
                        <Tab 
                            tabTit1="중개사 평점"
                            tabTit2="중개사무소 위치"
                            @updateTab="updateTab"
                        />
                        <div v-if="activeTab === 'tab1'">
                            <InfoBox 
                              :title="'평점 <em class=\'f_red\'>1,000</em>점'"
                              :data="{
                                data1:`고객평점 <em class='f_red'>600</em>점`,
                                data2:`시스템평점 <em class='f_red'>400</em>점`
                              }"
                              titClass="total"
                              wrapClass="bg_pink"
                            />
                            <div class="table_style bd_none rating_tb">
                              <table>
                                <caption>매물구분 테이블</caption>
                                  <colgroup>
                                    <col width="14%">
                                    <col width="16%">
                                    <col>
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th colspan="2">고객 평점(<em class="f_red">4</em>)</th>
                                      <th>
                                        <ul class="flex">
                                          <li>전문성:<em class="f_red">6.4</em>/10</li>
                                          <li>적극성:<em class="f_red">7.5</em>/10</li>
                                          <li>만족도:<em class="f_red">10</em>/10</li>
                                        </ul>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><em class="f_blue">계약완료</em></td>
                                      <td class="date">23.08.19</td>
                                      <td>
                                        <ul class="flex star_rating_ul">
                                          <li>전문성: <StarRating :rating="5" /> </li>
                                          <li>적극성: <StarRating :rating="5" /></li>
                                          <li>만족도: <StarRating :rating="4" /></li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><em class="f_blue">계약완료</em></td>
                                      <td class="date">23.07.07</td>
                                      <td>
                                        <ul class="flex star_rating_ul">
                                          <li>전문성: <StarRating :rating="3" /> </li>
                                          <li>적극성: <StarRating :rating="3" /></li>
                                          <li>만족도: <StarRating :rating="3" /></li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><em class="f_red">의뢰종료</em></td>
                                      <td class="date">23.07.01</td>
                                      <td>
                                        <ul class="flex star_rating_ul">
                                          <li>전문성: <StarRating :rating="1" /> </li>
                                          <li>적극성: <StarRating :rating="1" /></li>
                                          <li>만족도: <StarRating :rating="1" /></li>
                                        </ul>
                                      </td>
                                    </tr>
                                  </tbody>
                              </table>
                            </div>
                        </div>
                        <div v-if="activeTab === 'tab2'">
                            탭222
                        </div>
                    </div>
                </div>
                <!--//left content-->
                <aside class="right_container h_add">
                    <RtContHeader 
                        title="매물 주변 중개사"
                        colorClass="grass"
                    />
                    <div class="items_wrap">
                      <div class="item">
                        <OfferAgentInfo 
                          name="홍길동" 
                          office="은성공인중개소"
                          rating="5"
                          term="0.5"
                        />
                        <RtBtnBox optId="check1" date="23.10.10"/>
                      </div>
                      <div class="item">
                        <OfferAgentInfo 
                          name="김매물" 
                          office="매물공인중개소"
                          rating="3"
                          term="1.4"
                        />
                        <RtBtnBox optId="check2" date="23.08.10"/>
                      </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>