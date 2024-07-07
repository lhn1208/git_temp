<script setup>
import { ref } from 'vue';
import './trading.css';
import Step from '../components/Step.vue';
import SelectBtn from '../common/SelectBtn.vue';
import GuideBox from '../common/GuideBox.vue';
const dealTypes = ['전세', '월세', '매매', '단기임대'];
const offerTypes = ['아파트', '주상복합', '연립/빌라', '오피스텔','도시형','다가구주택','상가주택','원룸주택','단독/전원','한옥주택','타운하우스'];
</script>
<template>
    <div id="content">
        <Step 
            linktoNext="newReq2" 
            :prvBtShow="false" 
            :nextBtShow="true" 
            :step1="true"
            title="매수/임차 중개의뢰" 
            step1Txt="의뢰구분 선택"
        />
        <div class="sub_content request">
            <div class="table_style">
                <table>
                    <caption>매물구분 테이블</caption>
                    <colgroup>
                        <col width="18%">
                        <col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">거래구분</th>
                            <td>
                            <SelectBtn 
                                :options=dealTypes 
                                optId="deal_type"
                                type="radio"
                            />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">매물유형</th>
                            <td>
                            <SelectBtn 
                                :options=offerTypes 
                                optId="offer_type"
                                type="check"
                            />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <GuideBox :guides="{
                text1: `중개 의뢰할 거래구분과 매물유형을 선택하신 후 [다음]을 클릭하십시오.`
            }"  bulletClass="dot"/>
        </div>
    </div>
</template>