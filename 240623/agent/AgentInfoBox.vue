<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  wrapClass:String,
  titClass:String,
  title:String,
  rTitle1:String,
  rTitle2:String,
  rTitle3:String,
  rNum1:Number,
  rNum2:Number,
  rNum3:Number,
  txtClass1:String,
  txtClass2:String,
  txtClass3:String,
  btnAddClass:String,
  btnTxt1:String,
  link1:String,
  link2:String,
  link3:String,
  link:String
});
const router = useRouter();
const navigate = () => {
  if (props.link) {
    router.push(`/${props.link}`);
  }
};
</script>
<template>
  <div :class="[wrapClass, 'box_wrap info_box']">
      <div class="box">
        <strong :class="titClass">{{title}}</strong>
        <div class="right">
           <span>
              {{rTitle1}}: <em :class='txtClass1'>{{rNum1}}</em> 
              <button v-if="link1" class="f_blue r_link">상세보기<i class="link_arr">링크아이콘</i></button>
            </span>
           <span>
              {{rTitle2}}: <em :class='txtClass2'>{{rNum2}}</em>
              <button v-if="link2" class="f_blue r_link">상세보기<i class="link_arr">링크아이콘</i></button>
           </span>
           <span v-if="rTitle3">
              {{rTitle3}}: <em :class='txtClass3'>{{rNum3}}</em>
               <button v-if="link3" class="f_blue r_link" @click.prevent="navigate('point')">상세보기<i class="link_arr">링크아이콘</i></button>
          </span>
           <button :class="[btnAddClass, 'btn_round']" v-if="btnTxt1" @click.prevent="navigate">{{btnTxt1}}</button>
        </div>
      </div>
  </div>
</template>