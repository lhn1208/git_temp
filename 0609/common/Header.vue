<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import './common.css'
const isFixed = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <header :class="['header', { fixed: isFixed }]">
        <nav class="nav">
            <ul>
              <li><RouterLink to="/" active-class="on">메인</RouterLink></li>
              <li><RouterLink to="/myhome" active-class="on">마이홈</RouterLink></li>
              <li><RouterLink to="/offeringsSch" active-class="on">매물검색</RouterLink></li>
              <li><RouterLink to="/visitReq" active-class="on">방문요청</RouterLink></li>
              <li><RouterLink to="/myPurchase" active-class="on">나의 매수</RouterLink></li>
              <li><RouterLink to="/mySale" active-class="on">나의 매도</RouterLink></li>
            </ul>
        </nav>
        <a href="#" class="manage">공인중개사</a>
        <ul class="member">
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
        </ul>
    </header>
</template>
