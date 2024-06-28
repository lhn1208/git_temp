<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
    title:String,
    amt:String,
    wrapClass:String,
    titClass:String,
    btnTxt1:String,
    btnTxt2:String,
    myhome:Boolean,
    grade:Boolean
});

const router = useRouter();
const navigate = (link) => {
  if(link==='customer')
  router.push(`/customer`);
  if(link==='point')
  router.push(`/point`);
};
</script>
<template>
  <div :class="[wrapClass, 'box_wrap info_box']">
      <div class="box">
        <strong :class="titClass" v-html="title"></strong>
        <div class="right" v-if="myhome">
          <em class='f_blue'>{{amt}}</em>원
          <div class='btn_wrap'>
            <!-- <button class='btn_round'>중개수수료 결제</button> -->
            <button class='btn_round'  @click.prevent="navigate('point')">{{btnTxt1}}</button>
            <button class='btn_round'  @click.prevent="navigate('customer')">{{btnTxt2}}</button>
          </div>
        </div>
        <div class="right" v-if="grade">
          <span>고객평점 <em class='f_red'>600</em>점</span>
          <span>시스템평점 <em class='f_red'>400</em>점</span>
        </div>
      </div>
  </div>
</template>
<style scoped>
.info_box .total{font-size: 22px;}
</style>