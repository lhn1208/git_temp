<script setup>
import { defineProps, defineEmits, ref  } from 'vue';
const props = defineProps({
  offerTit:String,
  reqNum:String,
  addr:String,
  visitTime:String,
  realVistTm:String,
  lastDate:String,
  lastthTit:String,
  btnshow:Boolean,
  bgClass: {
    type: String, 
    default: ''
  },
  fontClass: {
    type: String, 
    default: ''
  },
});
</script>
<template>
    <div class="table_style table">
        <table>
          <caption>매물 정보와 방문 시간에 대한 상세 테이블</caption>
          <colgroup>
              <col width="18%">
              <col>
          </colgroup>
          <tbody>
            <tr>
                <th scope="row">매물 구분</th>
                <td><div class="flex_both_ends"><span>{{offerTit}}</span> <span class="req_num">요청번호: <span v-html="reqNum"></span></span></div></td>
            </tr>
            <tr>
                <th scope="row">매물 위치</th>
                <td>{{addr}}</td>
            </tr>
            <tr>
              <th scope="row">고객 방문시간</th>
              <td>{{visitTime}}</td>
            </tr>
            <tr>
              <th scope="row">현장 방문시간</th>
              <td><span v-html="realVistTm"></span></td>
            </tr>
            <tr>
              <th scope="row">{{lastthTit}}</th>
              <td>
                {{lastDate}}
                <div class="btn_area" v-if="btnshow">
                    <button class="btn_square basic">매물 신고</button>
                    <button class="btn_square red">계약 처리</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>