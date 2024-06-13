<script setup>
import { defineProps } from 'vue';
const props = defineProps({
 guides:{
    type: Object,
    required: false,
    default: () => ({})
  },
});
</script>    
<template>
    <div class="guide_box">
        <em><img src="@/assets/images/sub/bg_info.png"></em>
        <ul class="list">
            <li v-for="(guide, key) in guides" :key="key" v-html="guide"></li>
        </ul>
    </div>
</template>