<script setup>
import { defineProps, ref } from 'vue';

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
  comtType:String
});
const favBtn = ref(false);
const toggleFav = () => {
  favBtn.value = !favBtn.value;
};
</script>
<template>
  <component :is="comtType === 'link' ? 'a' : 'div'" :href="comtType === 'link' ? '#' : null" :class="[onClass, 'offer_item_box']">
    <figure><img :alt="alt" :src="src" /></figure>
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
</template>