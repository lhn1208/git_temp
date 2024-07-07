<script setup>
import './trading.css';
import Step from '../components/Step.vue';
import SelectBtn from '../common/SelectBtn.vue'
import { ref } from 'vue';

const options = ['임대','매매'];
const clients = ['집주인 측','세입자'];
const isTenantChecked = ref(false);
</script>
<template>
    <div id="content">
        <Step 
            linktoPrev="salenewReq1" 
            linktoNext="saleNewReq3" 
            :prvBtShow="true" 
            :nextBtShow="true" 
            :step2="true"
            title="매도/임대 중개의뢰" 
            step2Txt="의뢰정보 입력"
        />
        <div class="sub_content request">
          <section>
            <div class="flex_both_ends title_area">
                <h3 class="title f20">의뢰 구분</h3>
                <span><span class="f_red">*</span>필수 사항</span>
            </div>
            <div class="table_style">
                <table>
                    <caption>매물주소,매물구분,거래구분으로 구성된 테이블</caption>
                    <colgroup>
                        <col width="18%">
                        <col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">매물주소</th>
                            <td>서울특별시 송파구 잠실동 311-10(잠실 엘리티움)</td>
                        </tr>
                        <tr>
                            <th scope="row" rowspan="2" class="req">매물구분</th>
                            <td>
                                <div class="flex">
                                    <select>
                                        <option value="">매물구분 선택</option>
                                        <option value="">일반주택</option>
                                        <option value="">공동주택</option>
                                    </select>
                                    <select>
                                        <option value="">매물유형 선택</option>
                                        <option value="">다가구주택</option>
                                        <option value="">상가주택</option>
                                        <option value="">원룸주택</option>
                                        <option value="">단독주택</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg_pink"><p class="desc">※매물구분과 매물유형을 선택하십시오.</p></td>
                        </tr>
                        <tr>
                            <th scope="row" rowspan="2" class="req">거래구분</th>
                            <td>
                                <div class="flex">
                                    <SelectBtn 
                                        :options=options 
                                        optId="options"
                                        type="check"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
           </div>
          </section>
          <section>
           <h3 class="title f20">매물 정보</h3>
           <div class="table_style">
            <table>
                <caption>해당 동,해당 층,안내로 구성된 테이블</caption>
                <colgroup>
                    <col width="14%">
                    <col width="36%">
                    <col width="14%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row" class="req">해당 동</th>
                        <td>
                            <div class="flex">
                                <input type="text" placeholder="예)102,가,A,1" class="w150" title="해당 동 입력하세요.">동
                                <div class="chk"><input type="checkbox" class="checkbox" id="check">
                                <label for="check">동 없음</label></div>
                            </div>
                        </td>
                        <th scope="row" class="req">건물 층</th>
                        <td><div class="flex"><input type="text" class="w150" title="건물 층 입력하세요.">층</div></td>
                    </tr>
                    <tr>
                        <th scope="row" class="req">해당 층</th>
                        <td><div class="flex"><input type="text" class="w150" title="해당 층 입력하세요.">층</div></td>
                        <th scope="row" class="req">해당 호수</th>
                        <td><div class="flex"><input type="text" class="w150" placeholder="예)102, B01" title="해당 호수 입력하세요.">호</div></td>
                    </tr>
                    <tr>
                        <th scope="row">안내</th>
                        <td class="bg_pink" colspan="3"><p class="desc">※ 동, 층, 호수 등의 정보를 정확히 입력하십시오</p></td>
                    </tr>
                </tbody>
            </table>
           </div>
          </section>
          <section>
           <h3 class="title f20">의뢰인 정보</h3>
           <div class="table_style">
            <table>
                <caption>해당 동,해당 층,안내로 구성된 테이블</caption>
                <colgroup>
                    <col width="14%">
                    <col width="36%">
                    <col width="14%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <th class="req" scope="row">의뢰인 구분</th>
                        <td colspan="3">
                            <div class="flex">
                                <SelectBtn
                                    :options=clients
                                    optId="clients"
                                    type="radio"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>의뢰인 이름</th>
                        <td><span class="val">홍길동</span></td>
                        <th>휴대전화</th>
                        <td><span class="val">010-123-1233</span></td>
                    </tr>
                    <tr v-if="!isTenantChecked">
                        <th class="req" scope="row">세입자 정보</th>
                        <td colspan="3">
                            <input type="checkbox" class="checkbox" id="tenant_chk" v-model="isTenantChecked">
                            <label for="tenant_chk">세입자 있음</label>
                        </td>
                    </tr>
                    <tr v-if="isTenantChecked">
                        <th class="req" scope="row">세입자 정보</th>
                        <td>
                            <input type="checkbox" class="checkbox" id="tenant_chk" v-model="isTenantChecked" checked >
                            <label for="tenant_chk">세입자 있음</label>
                        </td>
                        <th>세입자 휴대전화</th>
                        <td>
                            <input type="text" placeholder="휴대전화번호 입력" title="휴대전화번호 입력하세요.">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">안내</th>
                        <td class="bg_pink" colspan="3"><p class="desc">※ 의뢰인 구분을 정확히 선택하신 후 세입자가 있을 경우 세입자 정보를 입력하십시오.</p></td>
                    </tr>
                </tbody>
            </table>
           </div>
          </section>
        </div>
    </div>
</template>
<style>
.table_style td .chk{margin-left: 10px; margin-top: 4px;}
</style>