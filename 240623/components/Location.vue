<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    title:String
});
</script>
<template>
    <div class="location_box">
        <div class="title">{{title}}</div>
        <div class="map">
        <div><img src="@/assets/images/sub/sample/searchhose_map.jpg"></div>
        <span class="navi">30m</span>
        <button class="btn btn_square red">로드뷰</button>
        </div>
    </div>
</template>
<style>
.location_box{border:1px solid var(--c-gray);}
.location_box .title{padding:20px; border-bottom: 1px solid var(--c-gray);}
.location_box .map{position: relative; overflow: hidden; width: 100%; height: 467px; overflow: hidden;}
.location_box .navi{display: flex; position: relative; align-items: center; justify-content: center; position: absolute; top: 50%; left: 50%; width: 100px; height: 100px; transform: translate(-50%, -50%);background-color: rgba(55,140,255,.6); border-radius: 50px; color: #fff; font-size: var(--font-mid); text-align: center;}
.location_box .navi::before{content: ""; position: absolute; top: 6px; left: 6px; width: 88px; height: 88px; background-color: var(--c-blue); border-radius: 50px; z-index: -1;}
.location_box .btn{position: absolute; bottom: 20px; right: 20px; min-width: 72px; width: 72px; line-height: 32px;}
</style>