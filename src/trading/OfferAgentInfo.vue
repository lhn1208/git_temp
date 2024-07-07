<script setup>
const props = defineProps({
  name: String,
  office: String,
  rating: String,
  term: String,
  //방문요청box
  date: String,
  optId:String,
  disabled:Boolean,
});
</script>
<template>
<div>
    <div class="offer_agent" id="content">
      <div class="col">
          <strong class="name">{{name}}</strong>
          <span>{{office}}</span>
      </div>
      <div class="col">
          <ul>
            <li>평점:<em class="f_red">{{rating}}</em>점</li>
            <li>매물과의 거리:<em class="f_blue">{{term}}</em>Km</li>
          </ul>
      </div>
    </div>
    <div class="bottom_box">
      <div class="check_form">
          <input type="checkbox" :id="optId" class="checkbox" :disabled="disabled">
          <label :for="optId">방문요청</label>
      </div>
      <span class="date">{{date}}</span>
    </div>
</div>
</template>