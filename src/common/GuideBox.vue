<script setup>
import { defineProps } from 'vue';
import './common.css'
const props = defineProps({
 guides:{
    type: Object,
    required: false,
    default: () => ({})
  },
  titleShow:Boolean,
  title:String,
  etcShow:Boolean,
  etcTxt:String,
  bulletClass:{
    type: String,
    required: false,
    default: ''
  },
});
</script>    
<template>
    <div class="guide_box">
        <em class="ico_help"><img src="@/assets/images/sub/bg_info.png"></em>
        <div class="guide_cont">
            <strong v-if="titleShow" class="title">{{ title }}</strong>
            <ul :class="[bulletClass,'list']">
                <li v-for="(guide, key) in guides" :key="key" v-html="guide"></li>
            </ul>
            <p v-if="etcShow" class="etc">{{ etcTxt }}</p>
        </div>
    </div>
</template>