<script setup>
const dealTypes = ['전세', '월세', '매매', '단기임대'];
const offerTypes = ['아파트', '주상복합', '연립/빌라', '오피스텔','도시형','다가구주택','상가주택','원룸주택','단독/전원','한옥주택','타운하우스'];
</script>
<template>
  <div>
    <h3 class="title">매물구분</h3>
    <table>
      <caption>매물구분 테이블</caption>
      <colgroup>
        <col width="18%">
        <col>
      </colgroup>
      <tbody>
          <tr>
            <th>거래구분</th>
            <td>
              <ul class="radio_btn_wrap">
                <li v-for="(option, index) in dealTypes" :key="index">
                  <input
                    :id="'deal_type' + index"
                    type="radio"
                    name="deal"
                    class="radio_btn"
                  />
                  <label :for="'deal_type' + index">
                    {{ option }}
                  </label>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>매물유형</th>
            <td>
              <ul class="radio_btn_wrap">
                 <li v-for="(option, index) in offerTypes" :key="index">
                  <input
                    :id="'offer_type' + index"
                    type="radio"
                    name="offer_type"
                    class="radio_btn"
                  />
                  <label :for="'offer_type' + index">
                    {{ option }}
                  </label>
                </li>
              </ul>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>