<script setup>
import { defineProps, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigate = () => {
  if (props.title === '공지사항') {
    router.push(`/customer`);
  } else if (props.title === '뉴스') {
    router.push({ path: '/customer', query: { activeTab: 'tab2' } });
  }
};

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  noticeDate: {
    type: Array,
    required: false,
    default: () => []
  },
});

watch(() => props.noticeDate, (newVal) => {
}, { immediate: true });
</script>
<template>
  <div class="box">
    <h2 class="row">{{ title }}</h2>
    <div class="cont">
      <div v-for="(notice, index) in noticeDate" :key="index">
        <a href="#" @click.prevent="navigate">{{ notice.text }} <i v-if="notice.isNew" class="ico"> NEW</i></a>
        <span class="date">{{ notice.date }}</span>
      </div>
    </div>
    <button class="more" @click.prevent="navigate">더보기</button>
  </div>
</template>