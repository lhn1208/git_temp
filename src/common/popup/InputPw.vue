 <script setup>
 import { defineProps} from 'vue';
 const props = defineProps({
   placeholder:{
    tyep:String,
    default:"비밀번호 입력"
   }
  });
 </script>
 <template>
   <li>
      <input class="input" type="password" title="비밀번호 입력하세요." :placeholder="placeholder">
  </li>
 </template>