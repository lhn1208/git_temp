  <script setup>
  import { defineProps, defineEmits, onMounted } from 'vue';
  import InputEmail from './InputEmail.vue';
  import InputPw from './InputPw.vue';
  import CheckBox from '../../common/CheckBox.vue';

  const props = defineProps({
    isJoinOpen: {
      type: Boolean,
      required: true
    }
  });

  const emit = defineEmits(['close-popup', 'next-step']);

  const closePopup = () => {
    emit('close-popup');
  };
  const nextStep = () => {
    emit('next-step');
  };

  onMounted(() => {
    console.log('--> 이메일조인1 isJoinOpen:', props.isJoinOpen);
  });
  </script>
  <template>  
  <div>
    <div :class="['full_cover', { on: isJoinOpen }]"></div>
    <div :class="['popup_wrap', { on: isJoinOpen }]">
      <div class="popup main_pop join">
        <button class="btn_close" aria-label="닫기"  @click="closePopup"></button>
          <h2 class="title">이메일로 회원가입</h2>
            <fieldset>
              <legend>이메일로 회원가입 입력</legend>
              <div class="member_form">
                <ul>
                  <li><input type="text" class="input" placeholder="이름(실명 입력)"></li>
                  <InputEmail />
                  <InputPw />
                  <InputPw placeholder="비밀번호 재입력"/>
                </ul>
            </div>
            <div>
              <CheckBox 
                    addClass="login_chk"
                    optId="chkAgree"
                    :labelTxt="'<em class=\'f_blue\'>리얼하우스 이용약관</em> 및 <em class=\'f_blue\'>개인정보처리방침</em>에 동의합니다.'"
                  />
            </div>
             <button class="btn_bottom" @click="nextStep">다음</button>
          </fieldset>
      </div>
    </div>
  </div>
  </template>