<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  stepMenu:Boolean,
  linktoPrev:String,
  linktoNext:String,
  prvBtShow:Boolean,
  nextBtShow:Boolean,
  finishtBtShow:Boolean,
  step1:Boolean,
  step2:Boolean,
  step3:Boolean,
  step4:Boolean,
  endStep:Boolean,
  nonClass:String,
  title:String,
  step1Txt:String,
  step2Txt:String,
  step3Txt:String,
  step4Txt:String
});

const router = useRouter()
const TogoPrev = () => {
  if (props.linktoPrev) {
    router.push(`/${props.linktoPrev}`);
  }
};
const TogoNext = () => {
  if (props.linktoNext) {
    router.push(`/${props.linktoNext}`);
  }
};
</script>
<template>
    <div class="container_top">
        <div class="content_w">
            <div class="step_left flex">
              <h2 class="title">{{title}}</h2>
              <ul :class="[nonClass,'step']">
                <li v-if="step1 || step2 || step3 || step4" :class="{ on: step1 }">
                  <em>1</em><span v-if="step1">{{ step1Txt }}</span>
                </li>
                <li v-if="step2 || step3 || step4" :class="{ on: step2 }">
                  <em>2</em><span v-if="step2">{{ step2Txt }}</span>
                </li>
                <li v-if="step3 || step4" :class="{ on: step3 }">
                  <em>3</em><span v-if="step3">{{ step3Txt }}</span>
                </li>
                <li v-if="step4" :class="{ on: step4 }">
                  <em>4</em><span v-if="step4">{{ step4Txt }}</span>
                </li>
              </ul>
              <span v-if="endStep" class="step_txt">{{title}} 완료</span>
            </div>
            <div class="btn_nav">
                <button class="arr_ico prev" @click="TogoPrev" v-if="prvBtShow">이전</button>
                <button class="arr_ico next on" @click="TogoNext" v-if="nextBtShow">다음</button>
                <button class="on" @click="TogoNext" v-if="finishtBtShow">확인</button>
            </div>
        </div>
    </div>
</template>
<style>
/*step*/
.container_top>div{display: flex; justify-content: space-between; align-items: center; height: 60px;}
.step_left.flex{gap:20px}
.step_left .title{font-size: 22px;}
.step_left :is(.step li,.step_txt){color: var(--c-red); font-size: var(--font-cont-tit);}
.step{display: flex; gap:10px;}
.step em{display: inline-block; width:30px; line-height: 30px; margin-right:4px; text-align: center; color: var(--c-light-gray); font-weight: 400; border: 1px solid var(--c-gray); border-radius: 50px;}
.step li.on em{background-color: var(--c-red); color: #fff; font-weight: 400; border:none;}
.step li{color: var(--c-red); font-size: var(--font-cont-tit);}
.step.none{display: none;}
</style>