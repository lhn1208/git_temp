<script setup>
const props = defineProps({
  date: String,
  optId:String,
  disabled:Boolean,
});
</script>
<template>
 <div class="bottom_box">
    <div class="check_form">
        <input type="checkbox" :id="optId" class="checkbox" :disabled="disabled">
        <label :for="optId">방문요청</label>
    </div>
    <span class="date">{{date}}</span>
</div>
</template>
