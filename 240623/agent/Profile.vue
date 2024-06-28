<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    profile:String
});
</script>
<template>
  <div class="leader_profile">
      <span v-if="profile === 'basic'"><img alt="중개사기본사진" src="@/assets/images/sub/img_no_agent.png" /></span>
      <span v-else><img alt="중개사사진" src="@/assets/images/sub/sample/img_agent.png" /></span>
  </div>
</template>