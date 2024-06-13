<script setup>
import { defineProps } from 'vue';
const props = defineProps({
 options:{
    type: Object,
    required: false,
    default: () => ({})
  },
  optId:String,
  type:String
});
</script>
<template>
    <div>
        <ul class="select_btn_wrap" v-if="type==='radio'">
            <li v-for="(option, index) in options" :key="index">
                <input
                    :id="optId + index"
                    type="radio"
                    :name="optId"
                    class="btn_type"
                />
                <label :for="optId + index">
                {{ option }}
                </label>
            </li>
        </ul>
        <ul class="select_btn_wrap" v-if="type==='check'">
            <li v-for="(option, index) in options" :key="index">
                <input
                    :id="optId + index"
                    type="checkbox"
                    :name="optId"
                    class="btn_type"
                />
                <label :for="optId + index">
                {{ option }}
                </label>
            </li>
        </ul>
    </div>
</template>