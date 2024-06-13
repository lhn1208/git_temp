<script setup>
const props = defineProps({
  name: String,
  office: String,
  rating: String,
  term: String
});
</script>
<template>
  <div class="offer_agent">
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
</template>