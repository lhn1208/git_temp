<script setup>
import { defineProps, defineEmits, ref, watch, onMounted } from 'vue';
import InputEmail from './InputEmail.vue';
import InputPw from './InputPw.vue';
import EmailJoin1 from './EmailJoin1.vue'
import EmailJoin2 from './EmailJoin2.vue'
import FindUser from './FindUser.vue'
import CheckBox from '../CheckBox.vue'

const props = defineProps({
  isPopupOpen: {
    type: Boolean,
    required: true
  },
  isJoinOpen: {
    type: Boolean,
    required: true
  },
  isJoinEnd: {
    type: Boolean,
    required: true
  },
  isFineUserOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close-popup', 'open-join', 'next-step', 'open-findUser']);
const closePopup = () => {
  emit('close-popup');
};  
const togoEmainJoin = () => {
  emit('open-join');
};
const nextStep = () => {
  emit('next-step');
};

const togoFindUser = () =>{
  emit('open-findUser');
}

watch(() => props.isPopupOpen, (newVal) => {
  console.log('--> isPopupOpen:', newVal);
});
watch(() => props.isJoinOpen, (newVal) => {
  console.log('--> isJoinOpen:', newVal);
});
watch(() => props.isJoinEnd, (newVal) => {
  console.log('--> isJoinEnd:', newVal);
});
onMounted(() => {
  console.log('--> Initial isJoinEnd:', props.isJoinEnd);
});
 </script>
<template>
<div>
  <div :class="['full_cover', { on: isPopupOpen }]"></div>
  <div :class="['popup_wrap', { on: isPopupOpen }]">
      <div class="popup main_pop login">
        <button class="btn_close" aria-label="닫기"  @click="closePopup"></button>
        <h2 class="title">로그인</h2>
        <fieldset>
            <legend>이메일 및 비밀번호 입력</legend>
            <div class="member_form">
              <ul>
                <InputEmail />
                <InputPw />
              </ul>
               <div class="login_options flex_both_ends">
                  <CheckBox 
                    addClass="login_chk"
                    optId="chkKeep"
                    labelTxt="로그인 상태유지"
                  />
                  <button @click="togoFindUser">아이디/비밀번호 찾기</button>
               </div>
            </div>
            <div class="btn_wrap">
                <button class="btn_square btn_login red">로그인</button>
                <div class="flex btn_join">
                  <button class="btn_square kakao">카카오톡으로 시작</button>
                  <button class="btn_square" @click="togoEmainJoin">이메일로 회원가입</button>
                </div>
            </div>
        </fieldset>
        <p class="btm_txt">회원가입은 개인과 중개사 공통입니다.</p>
      </div>
  </div>
  <EmailJoin1 @close-popup="closePopup" @next-step="nextStep" :isJoinOpen="isJoinOpen" />
  <EmailJoin2 @close-popup="closePopup" :isJoinEnd="isJoinEnd" />
  <FindUser @close-popup="closePopup" :isFineUserOpen="isFineUserOpen"/>
</div>
</template>