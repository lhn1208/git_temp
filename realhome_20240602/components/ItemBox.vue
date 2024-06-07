<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  alt: {
    type: String,
    required: true
  },
  src:{
    type: String,
    required: true
  },
  price:{
    type: String,
    required: true
  },
  info:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  labels:{
    type: Object,
    required: false,
    default: () => ({})
  },
  addr:{
    type: String,
    required: true
  },
  onClass:{
    type: String,
    required: false,
    default: ''
  },
  fav_ico: {
    type: String,
    required: false
  },
  fav_ico_on:{
    type: String,
    required: false,
    default: ''
  },
});
const favBtn = ref(false);
const toggleFav = () => {
  favBtn.value = !favBtn.value;
};
</script>
<template>
  <a href="#" :class="[onClass, 'offer_item_box']">
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
  </a>
</template>