<script setup>
import { ref } from 'vue';
const area_btn1 = ref(true);
const area_btn2 = ref(false);
const area_btn3 = ref(false);

const areaButton = (btnNumber) => {
  area_btn1.value = btnNumber === 1;
  area_btn2.value = btnNumber === 2;
  area_btn3.value = btnNumber === 3;
};
const koreaArea1 = ref([
  { id: 1, name: '서울시', active: true },
  { id: 2, name: '서울시', active: false },
  { id: 3, name: '서울시', active: false },
  { id: 4, name: '서울시', active: false },
  { id: 5, name: '서울시', active: false },
  { id: 6, name: '서울시', active: false },
  { id: 7, name: '서울시', active: false },
  { id: 8, name: '서울시', active: false },
  { id: 9, name: '서울시', active: false },
  { id: 10, name: '서울시', active: false }
]);
const toggleAreaButton1 = (id) => {
  koreaArea1.value.forEach(button => {
    button.active = button.id === id;
  });
};
const koreaArea2 = ref([
  { id: 1, name: '강남구', active: true },
  { id: 2, name: '강남구', active: false },
  { id: 3, name: '강남구', active: false },
  { id: 4, name: '강남구', active: false },
  { id: 5, name: '강남구', active: false },
  { id: 6, name: '강남구', active: false },
  { id: 7, name: '강남구', active: false },
  { id: 8, name: '강남구', active: false },
  { id: 9, name: '강남구', active: false },
]);
const toggleAreaButton2 = (id) => {
  koreaArea2.value.forEach(button => {
    button.active = button.id === id;
  });
};
const koreaArea3 = ref([
  { id: 1, name: '도산대로', active: true },
  { id: 2, name: '도산대로', active: false },
  { id: 3, name: '도산대로', active: false },
  { id: 4, name: '도산대로', active: false },
  { id: 5, name: '도산대로', active: false },
]);
const toggleAreaButton3 = (id) => {
  console.log(koreaArea3.value);
   koreaArea3.value.forEach(button => {
     button.active = button.id === id;
   });
};
</script>
<template>
   <div>
      <div class="flex">
        <h3 class="title">지역</h3>
        <div class="select_wrap">
            <button :class="['slect_btn', {on: area_btn1}]" @click="areaButton(1)">서울시</button>
            <button :class="['slect_btn', {on: area_btn2}]" @click="areaButton(2)">시군구</button>
            <button :class="['slect_btn', {on: area_btn3}]" @click="areaButton(3)">읍면동</button>
        </div>
      </div>
      <div class="btn_wrap" v-if="area_btn1">
        <button v-for="button in koreaArea1" :key="button.id" :class="{ on: button.active }" @click="toggleAreaButton1(button.id)">
          {{ button.name }}
        </button>
      </div>
      <div class="btn_wrap" v-else-if="area_btn2">
         <button v-for="button in koreaArea2" :key="button.id" :class="{ on: button.active }" @click="toggleAreaButton2(button.id)">
          {{ button.name }}
        </button>
      </div>
      <div class="btn_wrap" v-else-if="area_btn3">
         <button v-for="button in koreaArea3" :key="button.id" :class="{ on: button.active }" @click="toggleAreaButton3(button.id)">
          {{ button.name }}
        </button>
      </div>
   </div>
</template>