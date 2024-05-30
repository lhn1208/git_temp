<script setup>
import NoticeBox from './NoticeBox.vue'
</script>
<template>
  <main class="main">
     <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <section class="visual">
      <div class="visual_in">
          <div class="flex_center">
            <h2>헛걸음은 없다<br>허위매물이 근본적으로 차단되는 리얼 하우스</h2>
            <div class="search_form">
              <form action="#">
                  <fieldset>
                      <legend>검색하기 폼</legend>
                      <input class="search_input" type="text" title="지역명 검색" placeholder="지역명 검색">
                      <button>검색</button>
                  </fieldset>
              </form>
            </div>
          </div>
      </div>
      <swiper class="vs_swiper"
        :effect="'fade'"
        :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide><img alt="visual"  src="@/assets/images/main/visual1.jpg" /></swiper-slide>
        <swiper-slide><img alt="visual"  src="@/assets/images/main/visual2.jpg" /></swiper-slide>
      </swiper>
    </section>
    <section class="section intro">
      <div class="box_wrap col">
        <a href="#" class="box">
            <h2 class="f_red row">오픈 추천 이벤트</h2>
            <div class="cont">10억원 지급 추천이벤트가 1달간 진행됩니다.<br>포인트는 부동산 중개수수료를 납부하실 수 있습니다.</div>
        </a>
        <a href="#" class="box">
            <h2 class="f_blue row">왜 다른가?</h2>
            <div class="cont">허위/미끼매물의 근본적인 차단!!! <br>이젠, 매물을 보고 일일이 전화하지 않으셔도 됩니다.</div>
        </a>
      </div>
    </section>
    <section class="section items_swiper">
        <div class="flex sp_bw">
          <h2 class="h2_title">최근 본 매물</h2>
          <a href="#" class="f_blue r-link">전체보기(21)</a>
        </div>
    </section>
     <section class="section notice">
       <h2 class="h2_title">공지사항/뉴스</h2>
        <div class="box_wrap col">
          <NoticeBox title="공지사항" :noticeTit="[
              { text: '공지사항이 나타납니다1', isNew: 'NEW', date: '22.12.10' },
              { text: '공지사항이 나타납니다2', isNew: 'NEW', date: '22.12.11' },
              { text: '공지사항이 나타납니다3', date: '22.12.12' }
            ]"/>
          <NoticeBox title="뉴스" :noticeTit="[
              { text: '뉴스가 나타납니다1', isNew: 'NEW', date: '22.12.10' },
              { text: '뉴스가 나타납니다2', date: '22.12.11' },
              { text: '뉴스가 나타납니다3', date: '22.12.12' }
            ]"/>
        </div>
    </section>
  </main>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
       modules: [Autoplay, EffectFade],
    };
  },
};
</script>
