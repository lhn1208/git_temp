<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigate = (link) => {
  if(link==='schChk')
  router.push(`/SchChk`);
};

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
  <div class="sub_content agent">
    <div class="sch_manage">
      <h2 class="title">일정등록</h2>
      <div class="table_style">
          <table class="table">
              <caption>일정,제목,내용으로 구성된 일정등록 테이블</caption>
              <colgroup>
                  <col width="16%"> 
                  <col width="*"> 
              </colgroup>
              <tbody>
                  <tr>
                    <th scope="row">일정</th>
                    <td>
                      <div class="flex">
                        <select>
                          <option>방문일 선택</option>
                          <option>2023.04.04(월)</option>
                          <option>2023.04.05(화)</option>
                          <option>2023.04.06(수)</option>
                          <option>2023.04.07(목)</option>
                        </select>
                        <!--시간 선택-->
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
                        <!--//시간 선택-->
                        <select>
                          <option>30분 전 알림</option>
                          <option>1시간 전 알림</option>
                          <option>1일 전 알림</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">제목</th>
                    <td>
                      <input type="text" placeholder="제목을 입력하십시오" class="w100per">
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">내용</th>
                    <td>
                      <input type="textarea" placeholder="내용을 상세하게 기재하십시오." class="w100per textarea">
                    </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="btnarea both_ends">
        <button class="btn_square basic" @click.prevent="navigate('schChk')">취소</button>
        <button class="btn_square">등록</button>
      </div>
    </div>
  </div>
</template>