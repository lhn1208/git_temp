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
                <!-- <li><RouterLink to="/" active-class="on">리얼하우스</RouterLink></li> -->
                <li><RouterLink to="/agentMain" active-class="on">메인</RouterLink></li>
                <li><RouterLink to="/reqState" active-class="on">요청내역</RouterLink></li>
                <li><RouterLink to="/reqChk" active-class="on">요청관리</RouterLink></li>
              </ul>
          </nav>
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
