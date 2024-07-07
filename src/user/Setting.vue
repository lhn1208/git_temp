<script setup>
import { ref } from 'vue';
import TopArea from '../components/TopArea.vue'

const isEditingName = ref(false);
const isEditingEmail = ref(false);
const isEditingPhone = ref(false);
const isEditingPw = ref(false);
const changeName=()=>{
    isEditingName.value = !isEditingName.value;
}
const changeEmail=()=>{
    isEditingEmail.value = !isEditingEmail.value
}
const changePhone = () =>{
    isEditingPhone.value = !isEditingPhone.value
}
const changePw = () =>{
    isEditingPw.value = !isEditingPw.value
}
</script>
<template>
    <div class="sub_content" id="content">
        <div class="setting">
            <TopArea title="개인정보 설정" titleClass="f_blue" text1="개인정보를 변경하실 수 있습니다."/> 
            <div class="table_style">
                <table class="table">
                    <caption>이름,이메일,휴대전화,비밀번호로 구성된 테이블</caption>
                    <colgroup>
                        <col width="14%">
                        <col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">이름</th>
                            <td><div class="flex_both_ends">
                                    <span v-if="!isEditingName">홍길동</span>
                                    <input type="text" class="set_ch"  v-if="isEditingName">
                                    <button class="btn_square basic btn" @click="changeName">변경</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">이메일</th>
                            <td><div class="flex_both_ends">
                                    <span v-if="!isEditingEmail">test@naver.com</span>
                                    <input type="text" class="set_ch"  v-if="isEditingEmail">
                                    <button class="btn_square basic btn"  @click="changeEmail">변경</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">휴대전화</th>
                            <td><div class="flex_both_ends">
                                    <span v-if="!isEditingPhone">000-0000-0000</span>
                                    <input type="text" class="set_ch"  v-if="isEditingPhone">
                                    <button class="btn_square basic btn" @click="changePhone">변경</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">비밀번호</th>
                            <td><div class="flex_both_ends">
                                    <input type="password" value="12345" class="member_pw" disabled v-if="!isEditingPw">
                                    <input type="text" class="set_ch"  v-if="isEditingPw">
                                    <button class="btn_square basic btn" @click="changePw">변경</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="btn_leave">회원탈퇴</button>
        </div>      
    </div>
</template>