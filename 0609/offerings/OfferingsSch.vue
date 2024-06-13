  <script setup>
  import {ref, onMounted, onUnmounted, computed } from 'vue';
  import './offerings.css'
  import RtContHeader from '../components/RtContHeader.vue';
  import ItemBox from '../components/ItemBox.vue'
  import PopAreaSel from './PopAreaSel.vue'
  import PopOfferType from './PopOfferType.vue'
  import PopSliderSet from './PopSliderSet.vue'
  import PopFilter from './PopFilter.vue'

  const locationBtn = ref(false);
  const select_btn1 = ref(false);
  const select_btn2 = ref(false);
  const select_btn3 = ref(false);
  const select_btn4 = ref(false);

  function toggleButton(button) {
  const buttons = {
    locationBtn: locationBtn,
    select_btn1: select_btn1,
    select_btn2: select_btn2,
    select_btn3: select_btn3,
    select_btn4: select_btn4
  };
   // 버튼 상태를 저장
  const currentState = buttons[button].value;
  // 모든 버튼 상태를 false로 초기화
  Object.keys(buttons).forEach(key => {
    buttons[key].value = false;
  });
  // 클릭한 버튼의 상태를 토글
  buttons[button].value = !currentState;

  // 클릭한 버튼의 상태를 토글
  // if (button === 'locationBtn') {
  //   locationBtn.value = !locationBtn.value;
  // } else if (button === 'select_btn1') {
  //   select_btn1.value = !select_btn1.value;
  // } else if (button === 'select_btn2') {
  //   select_btn2.value = !select_btn2.value;
  // } else if (button === 'select_btn3') {
  //   select_btn3.value = !select_btn3.value;
  // } else if (button === 'select_btn4') {
  //   select_btn4.value = !select_btn4.value;
  // }
}

  function closePopup(button) {
    if (button === 'locationBtn') {
      locationBtn.value = false;
    } else if (button === 'select_btn1') {
      select_btn1.value = false;
    } else if (button === 'select_btn2') {
      select_btn2.value = false;
    } else if (button === 'select_btn3') {
      select_btn3.value = false;
    } else if (button === 'select_btn4') {
      select_btn4.value = false;
    }
  }
  const isCover = computed(() => locationBtn.value || select_btn1.value || select_btn2.value || select_btn3.value || select_btn4.value);

  onMounted(() => {
    // 페이지가 로드된 후에 실행되는 부분
    document.body.classList.add('hidden-overflow');
  });
  onUnmounted(() => {
    // 컴포넌트가 파괴될 때 실행되는 부분
    document.body.classList.remove('hidden-overflow');
  });
  </script>
  <template>
      <div class="sub_content type offerings_cont">  
          <div class="offer_set_box">
              <h2 class="set_tit">설정</h2>
              <div class="set_sch_form">
                 <button :class="['location', { on:locationBtn }]" @click="toggleButton('locationBtn')">
                      <span>서울시</span>
                      <span>강남구</span>
                      <span>도산대로</span>
                  </button>
                  <button :class="['slect_btn', {on:select_btn1}]" @click="toggleButton('select_btn1')">
                      <span>월세</span>
                      <span class="detail">아파트,오피스텔</span>
                  </button>
                  <button :class="['slect_btn', {on:select_btn2}]" @click="toggleButton('select_btn2')">
                      금액
                  </button>
                  <button :class="['slect_btn', {on:select_btn3}]" @click="toggleButton('select_btn3')">
                      면적
                  </button>
                  <button :class="['slect_btn', {on:select_btn4}]" @click="toggleButton('select_btn4')">
                      필터
                  </button>
              </div>
              <button class="reset">초기화</button>
            </div>
            <div :class="{'offer_set_pop': true, 'cover': isCover}">
              <div class="cover on"></div>
              <div v-if="locationBtn">
                <div class="pop_box area_slelct">
                    <button class="btn_close" aria-label="닫기" @click="closePopup('locationBtn')"></button>
                    <PopAreaSel />    
                </div>
              </div>
              <div v-else-if="select_btn1">
                <div class="pop_box offer_type">
                  <button class="btn_close" aria-label="닫기"  @click="closePopup('select_btn1')"></button>
                  <PopOfferType />    
                </div>
              </div>
              <div v-else-if="select_btn2">
                <div class="pop_box">
                  <button class="btn_close" aria-label="닫기"  @click="closePopup('select_btn2')"></button>
                    <PopSliderSet title="매매금액" min="0" mid="5억" max="무제한"/>
                    <PopSliderSet title="관리비" min="0" mid="20만원" max="무제한"/>
                </div>
              </div>
              <div v-else-if="select_btn3">
                <div class="pop_box">
                  <button class="btn_close" aria-label="닫기"  @click="closePopup('select_btn3')"></button>
                    <PopSliderSet title="전용면적" min="0" mid="182㎡(55평)" max="무제한"/>
                </div>
              </div>
              <div v-else-if="select_btn4">
                <div class="pop_box filter_box">
                  <button class="btn_close" aria-label="닫기"  @click="closePopup('select_btn4')"></button>
                  <PopFilter />
                </div>
              </div>
            </div>
            <div class="divide offerings_wrap">
              <div class="offer_map">
                <img src="@/assets/images/sub/sample/searchhose_main_map.jpg">
                <div class="control">
                  <button class="plus">+</button>
                  <button class="minus">ㅡ</button>
                </div>
                <button class="position" style="top:330px; left:170px">
                  <i>120</i>
                </button>
                <button class="position" style="top:190px; left:400px">
                  <i>1</i>
                  <span class="addr">신천동</span>
                </button>
                <button class="position" style="top:330px; left:500px">
                  <i>30</i>
                  <span class="addr">잠실동</span>
                </button>
              </div>
              <aside class="right_container offer_items h_add">
                  <RtContHeader 
                      title="전체매물"
                      totalCnt="21"
                  />
                  <div class="items_wrap">
                      <div class="item">
                          <ItemBox 
                              alt="매물 이미지1" 
                              src="src/assets/images/main/offering_img1.jpg" 
                              price="매매 3억 5000" 
                              info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                              type="아파트" :labels="{label1:'욕실수리', label2:'도배'}"  
                              addr="잠실주공1단지 104동잠실"
                              onClass="on"
                              fav_ico="Y"
                              comtType="link"
                          />
                      </div>
                      <div class="item">
                          <ItemBox 
                              alt="매물 이미지1" 
                              src="src/assets/images/main/offering_img1.jpg" 
                              price="매매 3억 5000" 
                              info="3룸 | 3층 | 82㎡(25)/100㎡(33)" 
                              type="아파트" :labels="{label1:'욕실수리', label2:'도배'}"  
                              addr="잠실주공1단지 104동잠실"
                              fav_ico="Y"
                              fav_ico_on="on"
                              comtType="link"
                          />
                      </div>
                  </div>
              </aside>
          </div>
      </div>
  </template>