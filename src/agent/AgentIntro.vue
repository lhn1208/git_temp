<script setup>
import './agent.css';
import { defineProps } from 'vue';
import Profile from './Profile.vue';
const props = defineProps({
    profile:String,
    addInfo:Boolean,
    linkShow:Boolean
});
</script>
<template>
    <div class="box_wrap">
       <div class="box agent_intro_box">
           <Profile :profile="profile"/>
            <div class="info_wrap">
                <ul class="info">
                    <li><em>중개사</em>홍길동(대표공인중개사) 
                        <a href="#" v-if="linkShow" class="f_blue">평점보기<i class="link_arr">링크 아이콘</i></a>
                    </li>
                    <li><em>중개사무소</em>중개법인잠실은성공인사사무소</li>
                    <li><em>주소</em> 서울시 송파구 잠실동 321-1(대성빌딩) 301호
                        <a href="#" v-if="linkShow" class="f_blue">위치확인<i class="link_arr">링크 아이콘</i></a>
                    </li>
                </ul>
                <ul class="info" v-if="addInfo">
                    <li><em>휴대전화</em>010-000-0000</li>
                    <li><em>대표젼화</em>02-000-0000</li>
                </ul>
            </div>
       </div>
    </div>
</template>