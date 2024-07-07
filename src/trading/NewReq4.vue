<script setup>
import { ref } from 'vue';
import './trading.css';
import Step from '../components/Step.vue';
import GuideBox from '../common/GuideBox.vue';
const hours = ref([
  { id: 1, hour: '7시', active: true },
  { id: 2, hour: '8시', active: false },
  { id: 3, hour: '9시', active: false },
  { id: 5, hour: '10시', active: false },
  { id: 6, hour: '11시', active: false },
  { id: 7, hour: '12시', active: false },
  { id: 8, hour: '13시', active: false },
  { id: 9, hour: '14시', active: false },
  { id: 10, hour: '15시', active: false },
  { id: 11, hour: '16시', active: false },
  { id: 12, hour: '17시', active: false },
  { id: 13, hour: '18시', active: false },
  { id: 14, hour: '19시', active: false },
  { id: 15, hour: '20시', active: false },
  { id: 16, hour: '21시', active: false },
]);
const clickButton1 = (id) => {
  hours.value.forEach(button => {
    button.active = button.id === id;
  });
};

const minutes = ref([
  { id: 1, minute: '00분', active: true },
  { id: 2, minute: '10분', active: false },
  { id: 3, minute: '20분', active: false },
  { id: 5, minute: '30분', active: false },
  { id: 6, minute: '40분', active: false },
  { id: 6, minute: '50분', active: false },
]);
const clickButton2 = (id) => {
  minutes.value.forEach(button => {
    button.active = button.id === id;
  });
};
//time box toggle
const showTimeBox = ref(false);
const toggleTimeBox = () => {
  showTimeBox.value = !showTimeBox.value;
};
</script>
<template>
    <div id="content">
        <Step 
          linktoPrev="newReq3" 
          linktoNext="newReqEnd" 
          :prvBtShow="true" 
          :finishtBtShow="true" 
          :step4="true"
          title="매수/임차 중개의뢰" 
          step4Txt="방문시간 선택"
        />
        <div class="sub_content request">
          <div class="table_style">
              <table>
                  <caption>방문시간 선택 테이블</caption>
                  <colgroup>
                      <col width="18%">
                      <col>
                  </colgroup>
                  <tbody>
                      <tr>
                          <th scope="row">방문시간 선택</th>
                          <td>
                            <div class="flex"> 
                              <select>
                                <option>방문일 선택</option>
                                <option>2023.04.04(월)</option>
                                <option>2023.04.05(화)</option>
                                <option>2023.04.06(수)</option>
                                <option>2023.04.07(목)</option>
                              </select>
                              <div class="timetable">
                                <button class="choice" @click="toggleTimeBox">시간 선택</button>
                                <div v-if="showTimeBox" class="time_box">
                                    <strong>시간 선택</strong>
                                    <div class="inner flex">
                                      <button v-for="button in hours" :key="button.id" :class="{ on: button.active }" @click="clickButton1(button.id)">
                                        {{ button.hour }}
                                      </button>
                                    </div>
                                    <strong>분 선택</strong>
                                    <div class="inner flex">
                                      <button v-for="button in minutes" :key="button.id" :class="{ on: button.active }" @click="clickButton2(button.id)" style="width:48px">
                                        {{ button.minute }}
                                      </button>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <p class="desc">※ 금일포함 <em class="f_red">7일</em>까지 선택 가능</p>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
            <GuideBox 
              :guides="{
                  text1: `1. 공인중개사가 전문가의 입장에서 좋은 매물을 추천합니다.`,
                  text2: `2. 추천매물을 확인 후, 마음에 드는 매물을 추가 방문요청하십시오.(나의 매수에서 추가 방문요청 가능)`,
                  text3: `3. 방문일시에 중개사무소를 방문하면 여러 개의 매물을 한번에 확인할 수 있어 빠르게 계약하실 수 있습니다.`
              }" 
              :etcShow="true" 
              etcTxt="※ 중개사무소 방문일은 당일을 피하시는 것이 좋습니다."
            />
        </div>
    </div>
</template>