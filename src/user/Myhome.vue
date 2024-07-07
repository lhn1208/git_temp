<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import TopArea from '../components/TopArea.vue'
import InfoBox from '../common/InfoBox.vue'
import ItemBox from '../components/ItemBox.vue';
import AppDownBox from '../components/AppDownBox.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// Swiper 모듈 설정
const modules = ref([Navigation]);

const router = useRouter();
const navigate = (link) => {
  if(link==='customer')
  router.push({ path: '/customer', query: { activeTab: 'tab3' } });
 else if(link==='offer'){
  router.push(`/favOffer`);
 }
};
</script>
<template>
   <div class="sub_content" id="content">
        <TopArea  title="홍길동" text1="your@email.com" text2="010-000-0000" btnText="설정" link="setting"/>
        <!--<IntroBox 
            title="오픈 추천 이벤트" 
            titleClass="f_red" 
            text="10억원 지급 오픈 이벤트가 1달간(18.01.28까지) 진행됩니다.<br>포인트는 부동산 중개수수료를 납부하실 수 있습니다."
            btnText="이벤트 안내/참여"
        />-->
        <section class="mt20">
            <div class="box_wrap col manage_box">
                <div class="box pd0">
                    <div class="cont">
                        <h3 class="tit">1대1 문의(<em class="f_red">1</em>)</h3>
                        <p class="text">궁금한 내용이나 개선사항 등을 올리시면 빠르게 답변드립니다.</p>
                    </div>
                    <div class="row"><a href="#" class="f_blue" @click.prevent="navigate('customer')">1대1 문의 바로가기<i class="link_arr">링크아이콘</i></a></div>
                </div>
                <div class="box pd0">
                    <div class="cont">
                        <h3 class="tit">중개의뢰 관리요청(<em class="f_red">2</em>)</h3>
                        <p class="text">지인 또는 중개사가 관리 요청한 중개의뢰가 나타납니다.</p>
                    </div>
                    <div class="row"><a href="#" class="f_blue">관리 요청하기<i class="link_arr">링크아이콘</i></a></div>
                </div>
            </div>
        </section>
         <section class="items_swiper">
          <div class="flex_both_ends">
            <h2 class="title">최근 본 매물</h2>
            <a href="./Main.vue" class="f_blue r-link" @click.prevent="navigate('offer')">전체보기(21)<i class="link_arr">링크아이콘</i></a>
          </div>
          <div class="swiper_wrap">
            <swiper class="swiper"
              :slidesPerView="4"
              :spaceBetween="20"
              :navigation="true"
              :modules="modules"
            >
            <swiper-slide><ItemBox 
              alt="매물 이미지1" 
              src="src/assets/images/main/offering_img1.jpg" 
              price="매매 3억 5000" 
              info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
              type="아파트" :labels="{label1:'욕실수리', label2:'도배'}"
              addr="잠실주공1단지 104동잠실"
              />
            </swiper-slide>
            <swiper-slide><ItemBox 
              alt="매물 이미지2" 
              src="src/assets/images/main/offering_img1.jpg" 
              price="매매 3억 5000" 
              info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
              type="빌라" :labels="{ label1: '주차가능' }"
              addr="잠실주공1단지 104동잠실"
              />
            </swiper-slide>
            <swiper-slide><ItemBox 
              alt="매물 이미지2" 
              src="src/assets/images/main/offering_img1.jpg" 
              price="매매 3억 5000" 
              info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
              type="빌라" :labels="{ label1: '주차가능' }"
              addr="잠실주공1단지 104동잠실"
              />
            </swiper-slide>
            <swiper-slide><ItemBox 
              alt="매물 이미지2" 
              src="src/assets/images/main/offering_img1.jpg" 
              price="매매 3억 5000" 
              info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
              type="빌라" :labels="{ label1: '주차가능' }"
              addr="잠실주공1단지 104동잠실"
              />
            </swiper-slide>
            <swiper-slide><ItemBox 
              alt="매물 이미지2" 
              src="src/assets/images/main/offering_img1.jpg" 
              price="매매 3억 5000" 
              info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
              type="빌라" :labels="{ label1: '주차가능' }"
              addr="잠실주공1단지 104동잠실"
              />
            </swiper-slide>
          </swiper>
        </div>
      </section>
      <section>
        <InfoBox 
            title="포인트"
            titClass="f_red"
            amt="10,000"
            wrapClass="point_box"
            btnTxt1="포인트 내역"
            btnTxt2="고객 센터"
            :myhome="true"
          />
      </section>
      <section>
        <AppDownBox />
      </section>
   </div>
</template>