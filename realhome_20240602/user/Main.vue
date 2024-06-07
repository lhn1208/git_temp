  <script setup>
  import { ref } from 'vue';
  import './user.css'
  import ItemBox from '../components/ItemBox.vue';
  import AppDownBox from '../components/AppDownBox.vue';
  import IntroBox from './MainIntro.vue';
  import NoticeBox from './NoticeBox.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';
  import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
  import data from "@/data";
  const newsData = ref(data);//newsData, data.js로 가져올 시 
  const noticeData = ref([
    { text: '공지가 나타납니다1', isNew: 'NEW', date: '22.12.10' },
    { text: '공지가 나타납니다2', isNew: 'NEW', date: '22.12.11' },
    { text: '공지가 나타납니다3', date: '22.12.12' }
  ]);

  // Swiper 모듈 설정
  const modules = ref([Autoplay, EffectFade, Navigation]);

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
      <section class="section main_intro">
        <div class="box_wrap col">
          <IntroBox 
            titleClass="f_red" 
            title="오픈추천 이벤트" 
            text="10억원 지급 추천이벤트가 1달간 진행됩니다2.<br>포인트는 부동산 중개수수료를 납부하실 수 있습니다."
          />
          <IntroBox 
            titleClass="f_blue" 
            title="왜 다른가?"
            text="허위/미끼매물의 근본적인 차단!!! <br>이젠, 매물을 보고 일일이 전화하지 않으셔도 됩니다."
          />
        </div>
      </section>
      <section class="section items_swiper">
          <div class="flex_both_ends">
            <h2 class="h2_title">최근 본 매물</h2>
            <a href="#" class="f_blue r-link">전체보기(21)<i class="link_arr">링크아이콘</i></a>
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
      <section class="section notice">
        <h2 class="h2_title">공지사항/뉴스</h2>
          <div class="box_wrap col">
              <NoticeBox 
                title="공지사항"
                :noticeDate="noticeData"
              />
              <NoticeBox 
                title="뉴스"
                :noticeDate="newsData"
              />
          </div>
      </section>
      <section class="section">
        <AppDownBox />
      </section>
    </main>
  </template>

