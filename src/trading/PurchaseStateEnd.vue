<script setup>
import './trading.css';
import GuideBox from '../common/GuideBox.vue';
import TopArea from '../components/TopArea.vue';
import StarRating from '../components/StarRating.vue';
import AgentIntro from '../agent/AgentIntro.vue';
</script>
<template>
    <div class="sub_content request" id="content">
        <TopArea  
            title="매수/임차 계약·종료 현황" 
            titleClass="f_red" 
            text1="매수/임차 중개의뢰의 계약현황 및 종료현황이 나타납니다." 
            btnText="목록보기" 
            btnClass="w200" 
            link="MyPurchase"
        />
        <AgentIntro :addInfo="true" :linkShow="true"/>
        <div class="table_style">
            <table>
                <caption>해당 동,해당 층,안내로 구성된 테이블</caption>
                <colgroup>
                    <col width="12%">
                    <col width="38%">
                    <col width="12%">
                    <col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">의뢰구분</th>
                        <th colspan="3" class="al_left" scope="col">
                            전세 | 아파트, 단독주택, 다가구주택<span class="rd_ico red sm">의뢰 종료</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">의뢰 종료일</th>
                        <td>23.08.09(화) 15:30(홍길동)</td>
                        <th scope="row">의뢰일</th>
                        <td>2023.09.06 15:20</td>
                    </tr>
                    <tr>
                        <th scope="row">평점</th>
                        <td colspan="3">
                          <div class="flex">
                            <ul class="flex star_rating_ul gap20">
                              <li>전문성:  <StarRating type="register" :initialRating="0" /> </li>
                              <li>적극성: <StarRating type="register" :initialRating="0" /></li>
                              <li>만족도: <StarRating type="register" :initialRating="0" /></li>
                            </ul>
                            <button class="btn_round bg emerald mid ml20">평점 작성</button>
                          </div>
                        </td>
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
                        <th scope="row">담당 의뢰인</th>
                        <td>홍길동 010-0000-0000</td>
                        <th scope="row">추가 의뢰인</th>
                        <td>홍길동 010-0000-0000</td>
                    </tr>
                    <tr>
                        <th scope="row">방문일</th>
                        <td colspan="3">23.08.09(화) 15:30 / 23.08.11(목) 10:30</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <GuideBox :guides="{
            text1: `1. 계약 처리한 경우 <em class='f_red'>계약처리 일부터 60일까지</em> <em class='f_blue'>[계약해지]</em>하실 수 있습니다.`,
            text2: `2. 보다 좋은 서비스를 위해 의뢰한 공인중개사의 평점을 있는 그대로 작성해주십시오.`
            }" />
     </div>
</template>