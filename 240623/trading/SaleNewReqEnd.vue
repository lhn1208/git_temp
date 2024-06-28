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
            linktoNext="MySale"
            title="매도/임대 중개의뢰" 
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
                                    <li>2. 공인중개사가 매물의 상세정보 입력을 위해 방문할 수 있습니다.</li>
                                    <li>3. 좋은 조건으로 빠른 거래를 위해 공인중개사와 금액을 협의하십시오.</li>
                                    <li>4. 매물의 사진을 등록하시면 더욱 빠르게 거래하실 수 있습니다.</li>
                                </ul>
                                <p class="txt_box">오전 9시 ~ 오후 6시 이후에 요청한 의뢰는 익일 공인중개사가 전화드릴 수 있습니다.
                                    <br>잠시만 기다리시면 곧 연락을 드리겠습니다.<br><br><br>매물이 등록되면 매물의 중개현황을 실시간 확인하실 수 있습니다.</p>
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
