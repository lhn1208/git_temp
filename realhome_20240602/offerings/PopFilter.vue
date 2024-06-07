<script setup>
const roomTypes = ['전체', '원룸(개방형)', '원룸(분리형)', '2룸', '3룸', '4룸', '5룸이상', '복층'];
const floorTypes = ['전체', '1층', '2층', '3~5층', '6~10층', '6~11층 이상', '반지하', '옥탑'];
const builtYear = ['전체', '~1년', '1년~3년', '3~5년', '5~10년', '10~20년', '20~30년', '30년 이상'];
const options = ['급매', '세안고', '엘리베이터', '주차', '반려동물', '전세자금대출'];
const in_options = ['에어컨', '냉장고', '세탁기', '가스레인지', '인덕션', '싱크대', '침대', '책상', '옷장', 'TV', '신발장', '전자도어락'];
</script>
<template>
    <div>
      <ul class="list">
        <li>
          <h3 class="title">방구조</h3>
          <ul class="chk_list">
            <li v-for="(option, index) in roomTypes" :key="index">
              <input
                :id="'room_type' + index"
                type="checkbox"
                class="checkbox"
              />
              <label :for="'room_type' + index">
                {{ option }}
              </label>
            </li>
          </ul>
        </li>
        <li>
          <h3 class="title">층 구분</h3>
          <ul class="chk_list">
            <li v-for="(option, index) in floorTypes" :key="index">
              <input
                :id="'floor_type' + index"
                type="checkbox"
                class="checkbox"
              />
              <label :for="'floor_type' + index">
                {{ option }}
              </label>
            </li>
          </ul>
        </li>
        <li>
          <h3 class="title">건축연도</h3>
          <ul class="chk_list">
            <li v-for="(option, index) in builtYear" :key="index">
              <input
                :id="'built_year' + index"
                type="checkbox"
                class="checkbox"
              />
              <label :for="'built_year' + index">
                {{ option }}
              </label>
            </li>
          </ul>
        </li>
        <li>
          <h3 class="title">옵션</h3>
          <ul class="chk_list">
            <li v-for="(option, index) in options" :key="index">
              <input
                :id="'option' + index"
                type="checkbox"
                class="checkbox"
              />
              <label :for="'option' + index">
                {{ option }}
              </label>
            </li>
          </ul>
        </li>
      </ul>
      <div class="inner_option">
        <h3 class="title">내부시설 옵션</h3>
         <ul class="radio_btn_wrap">
          <li v-for="(option, index) in in_options" :key="index">
            <input
              :id="'inner_option' + index"
              type="radio"
              name="deal"
              class="radio_btn"
            />
            <label :for="'inner_option' + index">
              {{ option }}
            </label>
          </li>
        </ul>
      </div>
      <button class="btn_reset">초기화</button>
    </div>
</template>
<style>
.filter_box .list{display: grid; grid-template-columns: repeat(4, 1fr);}
.filter_box .list>li{padding: 24px 20px; border-left: 1px solid var(--c-gray);}
.filter_box .list>li:first-child{border-left: none;}
.filter_box .chk_list{padding:10px 0;}
.filter_box .chk_list li{position: relative; margin-bottom: 14px;}
.inner_option{margin-bottom: 60px; padding: 24px 20px; border-top:1px solid var(--c-gray); border-bottom:1px solid var(--c-gray);}
</style>