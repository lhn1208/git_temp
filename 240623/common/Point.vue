<script setup>
import TopArea from '../components/TopArea.vue'
import GuideBox from './GuideBox.vue';
</script>
<template>
      <div class="sub_content" id="content">
        <TopArea title="포인트 내역" titleClass="f_red" text1="포인트 지급내역 및 사용내역이 나타납니다."/> 
        <div class="table_style center bd_none pd20">
            <table class="table">
                <caption>구분,내역,금액,포인트잔고,일자로 구성된 테이블</caption>
                <colgroup>
                        <col width="13%"> 
                        <col width="*"> 
                        <col width="14%"> 
                        <col width="14%"> 
                        <col width="14%"> 
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">구분</th>
                        <th scope="col">내역</th>
                        <th scope="col">금액</th>
                        <th scope="col">포인트 잔고</th>
                        <th scope="col">일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="f_red">수수료 결제</span></td>
                        <td class="al_left">잠실제일공인중개사사무소(홍길동) 010-0000-0000</td>
                        <td><span class="f_red">500,000원</span></td>
                        <td>200,000원</td>
                        <td>23.08.19</td>
                    </tr>
                    <tr>
                        <td><span class="f_red">수수료 결제</span></td>
                        <td class="al_left">잠실제일공인중개사사무소(홍길동) 010-0000-0000</td>
                        <td><span class="f_red">300,000원</span></td>
                        <td>700,000원</td>
                        <td>23.08.19</td>
                    </tr>
                    <tr>
                        <td><span class="f_blue">수수료 결제</span></td>
                        <td class="al_left">이벤트 2등 당첨</td>
                        <td><span class="f_blue">10,00,000원</span></td>
                        <td>10,00,000원</td>
                        <td>23.08.19</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table_style center bd_none pd20">
            <table class="table">
                <caption>구분,내역,금액,포인트잔고,일자로 구성된 테이블</caption>
                <colgroup>
                        <col width="13%"> 
                        <col width="*"> 
                        <col width="14%"> 
                        <col width="14%"> 
                        <col width="14%"> 
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">구분</th>
                        <th scope="col">내역</th>
                        <th scope="col">금액</th>
                        <th scope="col">포인트 잔고</th>
                        <th scope="col">일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="5">포인트 내역이 없습니다.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <GuideBox :guides="{
        text1: '지급된 포인트는 유효기간이 없어 언제나 사용하실 수 있습니다.',
        text2: '해당 중개의뢰가 계약완료로 처리된 경우에만 포인트를 사용하실 수 있습니다.'
        }" bulletClass="dot"/>
      </div>
</template>