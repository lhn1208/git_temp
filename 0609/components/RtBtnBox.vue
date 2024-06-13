<script setup>
const props = defineProps({
  date: String,
  optId:String,
});
</script>
<template>
 <div class="bottom_box">
    <div class="check_form">
        <input type="checkbox" :id="optId" class="checkbox">
        <label :for="optId">방문요청</label>
    </div>
    <span class="date">{{date}}</span>
</div>
</template>
