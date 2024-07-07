<script setup>
import Step from '../components/Step.vue';
import './trading.css';
</script>
<template>
    <div id="content">
        <Step 
            :stepMenu="false" 
            :endStep="true" 
            :finishtBtShow="true"  
            nonClass="none" 
            linktoNext="MyPurchase"
            title="매수/임차 중개의뢰" 
        />
        <div class="sub_content request">
            <div class="table_style info">
                <table>
                    <caption>방문시간 선택 테이블</caption>
                    <colgroup>
                        <col width="18%">
                        <col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">안내</th>
                            <td>
                                <ul class="list">
                                    <li>1. 요청한 공인중개사가 중개의뢰 승인 후, 확인을 위해 전화 연락합니다.</li>
                                    <li>2. 공인중개사가 중개사무소 방문 전에 전문가의 입장에서 좋은 매물을 추천합니다.</li>
                                    <li>3. 추천 매물을 확인하시고 추가 방문할 매물이 있을 경우 [나의 매수 > 의뢰현황]에서 [추가 방문요청]을 하십시오.</li>
                                    <li>4. 중개의뢰 현황에서 공인중개사가 확인요청한 매물을 현장방문을 요청하면 방문완료 처리 후, 계약처리하실 수 있습니다.</li>
                                    <li>5. 만약 방문한 매물이 모두 마음에 들지 않아도 중개사무소 추가 방문을 통해 매물을 확인하실 수 있습니다.</li>
                                </ul>
                                <p class="txt_box">오전 9시 ~ 오후 6시 이후에 요청한 의뢰는 익일 공인중개사가 전화드릴 수 있습니다.
                                    <br>잠시만 기다리시면 곧 연락을 드리겠습니다.</p>
                                <hr>
                                <p class="txt_box">공인중개사가 중개의뢰를 거절하거나 2시간(업무시간 기준) 동안 의뢰를 승인하지 않을 경우 거리와 평점을 고려하여
                                    다른 공인중개사에게 자동 중개의뢰 요청 처리됩니다.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
