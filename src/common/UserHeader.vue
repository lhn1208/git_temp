<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import './common.css'
import Login from './popup/Login.vue';

const isFixed = ref(false);
const handleScroll = () => {
  if (window.scrollY > 71) {
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
};

//login popup
const isPopupOpen = ref(false);
const isJoinOpen = ref(false);
const isJoinEnd = ref(false);
const isFineUserOpen = ref(false);

const loginPopup = () => {
  isPopupOpen.value = true;
};

/*이메일 회원가입*/
const openJoin = () => {
  isPopupOpen.value = false;
  isJoinOpen.value = true;
  isJoinEnd.value = false;
};
const goToNextStep = () => {
  isJoinOpen.value = false;
  isJoinEnd.value = true;
};

/* 아이디/비밀번호 찾기 */
const openFindUser = () =>{
   isPopupOpen.value = false;
   isFineUserOpen.value = true;
}

const closePopup = () => {
  isPopupOpen.value = false;
  isJoinOpen.value = false;
  isJoinEnd.value = false;
  isFineUserOpen.value = false; 
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <div>
      <div class="skip_nav">
        <a href="#content">본문 바로가기</a>
      </div>
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
          <!-- <RouterLink to="/agentMain" class="manage">공인중개사</RouterLink> -->
          <ul class="member">
              <li><a href="#" @click="loginPopup">로그인</a></li>
          </ul>
      </header>
      <!-- <Login :isPopupOpen="isPopupOpen" @closePopup="isPopupOpen = false" /> -->
      <Login 
        :isPopupOpen="isPopupOpen" 
        @close-popup="closePopup" 
        @open-join="openJoin" 
        :isJoinOpen="isJoinOpen"  
        :isJoinEnd="isJoinEnd"
        @next-step="goToNextStep"
        :isFineUserOpen="isFineUserOpen"
        @open-findUser="openFindUser"
    />
    </div>
</template>
