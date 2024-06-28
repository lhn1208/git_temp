<script setup>
import TopArea from '../../components/TopArea.vue';
import CheckBox from '../../common/CheckBox.vue';
import GuideBox from '../../common/GuideBox.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigate = (link) => {
  if(link==='reqState')
  router.push(`/ReqState`);
};
</script>
<template>
  <div class="sub_content agent">
    <div class="req_chk_wrap">
      <TopArea  
        title="매수/임차 온라인의뢰 관리" 
        titleClass="f_red"
        text1="고객이 온라인 매수/임차 중개의뢰를 요청했습니다."
      />
      <section>
        <div class="flex_both_ends title_area">
          <h3 class="title f20">매수/임차 온라인 중개의뢰 요청</h3>
          <span class="date">2023.04.06 20:30</span>
        </div>
        <div class="table_style">
          <table class="table">
              <caption>확인요청 매물,담당의뢰인,최종매물 확인일으로 구성된 테이블</caption>
              <colgroup>
                  <col width="14%"> 
                  <col width="*"> 
              </colgroup>
              <tbody>
                  <tr>
                    <th scope="row">담당 의뢰인</th>
                    <td>홍길동 010-0000-0000</td>
                  </tr>
                  <tr>
                    <th scope="row">의뢰 구분</th>
                    <td>전세 | 아파트, 단독주택, 다가구</td>
                  </tr>
                  <tr>
                    <th scope="row">방문요청 매물</th>
                    <td>5개</td>
                  </tr>
                  <tr>
                    <th scope="row">의뢰인 방문시간</th>
                    <td>2018.09.06(화) 13시 30분
                      <p class="desc">※ 방문시간은 수락 후 변경하실 수 있습니다.</p>
                    </td>
                  </tr>
              </tbody>
          </table>
        </div>
        <div class="grp">
          <CheckBox optId="check1" labelTxt="위의 안내사항에 동의합니다." />
        </div>
      </section>
      <GuideBox :guides="{
        text1: `1. 의뢰를 수락하시면 <em class='f_red'>의뢰인 정보가 공개되어 통화</em>하실 수 있습니다.`,
        text2: `2. 의뢰를 수락하시면 온라인 <em class='f_red'>[임대 의뢰수수료] 10,000원이 결제</em>됩니다.`,
        text3: `3. 업무시간(9시~18시)을 기준으로 <em class='f_red'> 2시간 동안 의뢰를 수락하지 않을 경우 자동 의뢰 거절 처리되며 평점이 감점</em>됩니다.`
      }" />
      <div class="btnarea both_ends">
        <button class="btn_square basic" @click.prevent="navigate('reqState')">취소</button>
        <button class="btn_square red">의뢰수락</button>
      </div>
    </div>
  </div>
</template>