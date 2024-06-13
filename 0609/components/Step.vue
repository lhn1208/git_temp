<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  linktoPrev:String,
  linktoNext:String,
  prvBtShow:Boolean,
  nextBtShow:Boolean,
  step1:Boolean,
  step2:Boolean,
  step3:Boolean,
  step4:Boolean
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
        <div class="content_w flex_both_ends">
            <ul class="step">
                <li :class="{ on: step1 }"><em>1</em><span v-if="step1">의뢰구분 선택</span></li>
                <li :class="{ on: step2 }"><em>2</em><span v-if="step2">방문요청 매물 선택</span></li>    
                <li :class="{ on: step3 }"><em>3</em><span v-if="step3">중개사 선택</span></li>
                <li :class="{ on: step4 }"><em>4</em><span v-if="step4">중개사 선택</span></li>
            </ul>
            <div class="btn_nav">
                <button class="arr_ico prev" @click="TogoPrev" v-if="prvBtShow">이전</button>
                <button class="arr_ico next on" @click="TogoNext" v-if="nextBtShow">다음</button>
            </div>
        </div>
    </div>
</template>
<style>
.container_top>div{height: 60px;}
.step{display: flex; gap:14px;}
.step em{display: inline-block; width:30px; line-height: 30px; margin-right:4px; text-align: center; color: var(--c-light-gray); font-weight: 400; border: 1px solid var(--c-gray); border-radius: 50px;}
.step li.on em{background-color: var(--c-red); color: #fff; font-weight: 400; border:none;}
.step li{color: var(--c-red); font-size: var(--font-cont-tit);}
</style>