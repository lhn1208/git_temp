<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import './customer.css'
import TopArea from '../components/TopArea.vue';
import Tab from '../common/Tab.vue';
import Board from './Board.vue';

const activeTab = ref('tab1');
const updateTab = (tab) => {
  activeTab.value = tab;
};
const route = useRoute();
const initialTab = ref(null);

onMounted(() => {
   initialTab.value = route.query.activeTab; 
});
</script>
<template>
   <div class="sub_content customer" id="content">
      <TopArea  
        title="고객센터" 
        titleClass="f_blue" 
        text1="리얼하우스는 좋은 서비스를 위해 최선을 다하겠습니다." 
        btnText="닫기" 
        link="main"
      />
      <!--tab-->
      <div class="tab_container">
        <Tab
          tabTit1="공지사항"
          tabTit2="뉴스"
          tabTit3="1대1 문의"
          @updateTab="updateTab"
          :initialTab="initialTab"
        />
      </div>
      <!--//tab-->
      <!--tab1-->
      <div v-if="activeTab === 'tab1'">
         <ul class="box_list">
            <Board title="공지사항입니다1" labelIco="NEW" date="23-06-06"/>
            <Board title="공지사항입니다2" date="23-06-06"/>
            <Board title="공지사항입니다3" date="23-06-06"/>
            <Board title="공지사항입니다" date="23-06-06"/>
            <Board title="공지사항입니다" date="23-06-06"/>
            <Board title="공지사항입니다" date="23-06-06"/>
         </ul>
      </div>
      <!--//tab1-->
      <!--tab2-->
      <div v-if="activeTab === 'tab2'">
         <ul class="box_list">
            <Board title="뉴스입니다1" labelIco="NEW" date="23-06-06"/>
            <Board title="뉴스입니다" labelIco="NEW" date="23-06-06"/>
            <Board title="뉴스입니다" date="23-06-06"/>
            <Board title="뉴스입니다" date="23-06-06"/>
            <Board title="뉴스입니다" date="23-06-06"/>
            <Board title="뉴스입니다" date="23-06-06"/>
         </ul>
      </div>
      <!--//tab2-->
      <!--tab3-->
      <div v-if="activeTab === 'tab3'">
         <div class="table_style">
            <table class="table">
               <caption>문의 제목,문의 내용으로 구성된 테이블</caption>
               <colgroup>
                     <col width="14%">
                     <col width="*">
               </colgroup>
               <tbody>
                     <tr>    
                        <th scope="row"><label for="reqTit">문의 제목</label></th>
                        <td>
                           <input id="reqTit" type="text" class="w100per" placeholder="문의 제목을 입력하십시오.">
                        </td>
                     </tr>
                     <tr>
                        <th scope="row"><label for="reqCont">문의 내용</label></th>
                        <td>
                           <div class="textarea_box">
                              <textarea id="reqCont" class="w100per textarea" placeholder="문의 내용을 상세하게 기재하십시오."></textarea>
                           </div>
                        </td>
                     </tr>
               </tbody>
            </table>
         </div>
         <div class="grp flex_end">
            <button class="btn_square red">문의 등록</button>
         </div>
         <h3 class="title">1대1 문의사항</h3>
         <ul class="box_list">
            <Board title="1대1 문의사항입니다1" labelIco="미답변" date="23-06-10"/>
            <Board title="1대1 문의사항입니다" labelIco="미답변" date="23-06-10"/>
            <Board title="1대1 문의사항입니다" labelIco="답변완료" icoClass="grass" date="23-06-06"/>
            <Board title="1대1 문의사항입니다" labelIco="답변완료" icoClass="grass" date="23-06-06"/>
            <Board title="1대1 문의사항입니다" labelIco="답변완료" icoClass="grass" date="23-06-06"/>
            <Board title="1대1 문의사항입니다" labelIco="답변완료" icoClass="grass" date="23-06-06"/>
         </ul>
      </div>
      <!--//tab3-->
   </div>
</template>