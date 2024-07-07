<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title:String,
    labelIco:String,
    date:String,
    icoClass:String
});

</script>
<template>
     <li>
        <div><a href="#">{{title}}</a><span :class="['rd_ico sm' , icoClass ? 'grass' : 'red']" v-if="labelIco">{{labelIco}}</span></div>
        <span class="date">{{date}}</span>
    </li>
</template>