<script setup>
import { defineProps } from 'vue';

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
});
</script>
<template>
  <a href="#" class="item_box">
    <figure><img :alt="alt" :src="src" /></figure>
    <figcaption>
      <strong>{{price}}</strong>
      <div class="item_info">
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