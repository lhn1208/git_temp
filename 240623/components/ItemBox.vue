<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  alt:String,
  src:String,
  price:String,
  info:String,
  type:String,
  labels:{
    type: Object,
    required: false,
    default: () => ({})
  },
  addr:String,
  onClass:{
    type: String,
    required: false,
    default: ''
  },
  fav_ico: String,
  fav_ico_on:{
    type: String,
    required: false,
    default: ''
  },
  comtType:String,
  dealEnd:Boolean,
  seen:Boolean,
  //방문요청box
  visitChk:Boolean,
  date: String,
  optId:String,
  disabled:Boolean,
});
const favBtn = ref(false);
const toggleFav = () => {
  favBtn.value = !favBtn.value;
};

onMounted(() => {
  if (props.fav_ico_on) {
    favBtn.value = true;
  }
});

</script>
<template>
<div>
  <div v-if="!src && !price && !info && !type && !addr" class="none">
      추천매물이 없습니다.
  </div>
  <component :is="comtType === 'link' ? 'a' : 'div'" :href="comtType === 'link' ? '#' : null" :class="[onClass, 'offer_item_box']" v-else>
      <figure>
        <div v-if="dealEnd" class="cover"><span class="txt">거래완료</span></div>
        <div v-if="seen" class="seen"><span class="txt">SEEN</span></div>
        <img :alt="alt" :src="src" />
      </figure>
      <figcaption>
        <strong>{{price}}</strong>
        <div class="item_info">
        <button 
            v-if="fav_ico" 
            :class="['fav_ico', { on: favBtn }]" 
            @click.prevent="toggleFav"
          >관심</button>
          <span>{{info}}</span>
          <div class="label_row">
            <i class="point">{{ type }}</i>
            <i v-for="(label, index) in labels" :key="index">{{ label }}</i> 
          </div>
          <span>{{addr}}</span>
        </div>
      </figcaption>
  </component >
  <div class="bottom_box" v-if="visitChk">
    <div class="check_form">
        <input type="checkbox" :id="optId" class="checkbox" :disabled="disabled">
        <label :for="optId">방문요청</label>
    </div>
    <span class="date">{{date}}</span>
  </div>
</div>
</template>