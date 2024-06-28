<script setup>
import { defineProps, ref, watchEffect } from 'vue';
const props = defineProps({
  min: String,
  mid: String,
  max: String,
});

const slider1Value = ref(25);
const slider2Value = ref(75);
const range1 = ref(slider1Value.value);
const range2 = ref(slider2Value.value);
const sliderTrack = ref(null);

const updateTrack = () => {
  const min = Math.min(slider1Value.value, slider2Value.value);
  const max = Math.max(slider1Value.value, slider2Value.value);
  range1.value = min;
  range2.value = max;
  
  if (sliderTrack.value) {
    sliderTrack.value.style.background = `linear-gradient(to right, #ddd ${min}%, #378cff ${min}%, #378cff ${max}%, #ddd ${max}%)`;
  }
}

watchEffect(() => {
  updateTrack();
});
</script>
<template>
<div>
  <div class="slider-container">
    <div ref="sliderTrack" class="slider-track"></div>
    <input type="range" min="0" max="100" v-model="slider1Value" class="slider" @input="updateTrack">
    <input type="range" min="0" max="100" v-model="slider2Value" class="slider" @input="updateTrack">
  </div>
  <div class="labels">
        <span>{{min}}</span>
        <span>{{mid}}</span>
        <span>{{max}}</span>
    </div>
  <div class="slider-values">
    <span>0~</span>
    <span>100</span>
  </div>
</div>   
</template>
<style>
.slider-container {
  position: relative;
  width: 100%;
  margin-top: 40px;
  height: 8px;
}
.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: transparent;
  position: absolute;
  pointer-events: none;
  top: -2px;
}
.slider-track {
  position: absolute;
  top: 0;
  width: 100%;
  height: 8px;
  background: #ddd;
  border-radius: 4px;
  z-index: -1;
}
.slider-values {
  display: flex;
  padding-top: 30px;
  color: var(--c-blue);
}
.slider::-webkit-slider-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #378cff;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  z-index: 3;
}

.slider::-moz-range-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #378cff;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  z-index: 3;
}
.labels{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: var(--c-bold-gray);
}
</style>