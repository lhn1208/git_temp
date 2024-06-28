<script setup>
  import { defineProps,defineEmits } from 'vue';
  const props = defineProps({
    isFineUserOpen: {
      type: Boolean,
      required: true
    }
  });
  const emit = defineEmits(['close-popup']);

  const closePopup = () => {
    emit('close-popup');
  };
</script>
<template>
  <div>
    <div :class="['full_cover', { on: isFineUserOpen }]"></div>
    <div :class="['popup_wrap', { on: isFineUserOpen }]">
         <div class="popup main_pop find_user">
            <button class="btn_close" aria-label="닫기" @click="closePopup"></button>
            <h2 class="title">아이디/비밀번호 찾기</h2>
            <fieldset>
              <div class="member_form">
                <ul>
                    <li><input type="text" class="input" placeholder="이메일 입력" title="이메일을 입력하세요."></li>
                    <li class="flex">
                        <input type="text" class="input" placeholder="휴대전화번호 입력" title="휴대전화번호를 입력하세요.">
                        <button class="btn_square">인증번호 전송</button>
                    </li>
                    <li><input type="text" class="input" placeholder="인증번호 입력"></li>
                </ul> 
              </div>
              <button class="btn_bottom" @click="closePopup">회원가입 완료</button>
            </fieldset>
         </div>
    </div>
  </div>
</template>