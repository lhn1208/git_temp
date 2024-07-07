  <script setup>
  import { defineProps, defineEmits } from 'vue';
  import InputEmail from './InputEmail.vue';
  import InputPw from './InputPw.vue';
  import CheckBox from '../../common/CheckBox.vue';

  const props = defineProps({
    isJoinEnd: {
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
    <div :class="['full_cover', { on: isJoinEnd }]"></div>
    <div :class="['popup_wrap ', { on: isJoinEnd }]">
        <div class="popup main_pop join">
            <button class="btn_close" aria-label="닫기"  @click="closePopup"></button>
            <h2 class="title">이메일로 회원가입</h2>
            <fieldset>
              <legend>이메일로 회원가입 입력</legend>
              <div class="member_form">
                  <ul>
                    <li class="flex">
                      <input type="text" class="input" placeholder="휴대전화번호 입력" title="휴대전화번호를 입력하세요.">
                      <button class="btn_square">인증번호 전송</button>
                    </li>
                    <li><input type="text" class="input" placeholder="인증번호 입력"> </li>
                  </ul>
              </div>
              <button class="btn_bottom" @click="closePopup">회원가입 완료</button>
            </fieldset>
            <p class="btm_txt">※ 휴대전화번호 입력 후, [인증번호 전송]을 누르십시오.<br>※ 전송된 인증번호를 입력 후, [회원가입 완료]을 누르십시오.</p>
        </div>
    </div>
  </div>
  </template>