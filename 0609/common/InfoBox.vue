<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title:String,
    data:{ type: Object, default: () => ({})},
    wrapClass:{ type: String, default: '' },
    titClass:{ type: String, default: '' },
});
</script>
<template>
  <div :class="[wrapClass, 'box_wrap info_box']">
      <div class="box">
        <strong v-html="title" :class="titClass"></strong>
        <div class="right">
           <div v-for="(data, key) in data" :key="key" v-html="data"></div>
        </div>
      </div>
  </div>
</template>
<style scoped>
.info_box .total{font-size: 22px;}
</style>