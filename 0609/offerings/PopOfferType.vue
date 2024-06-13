<script setup>
import SelectBtn from '../common/SelectBtn.vue'
const dealTypes = ['전세', '월세', '매매', '단기임대'];
const offerTypes = ['아파트', '주상복합', '연립/빌라', '오피스텔','도시형','다가구주택','상가주택','원룸주택','단독/전원','한옥주택','타운하우스'];
</script>
<template>
  <div>
    <h3 class="title">매물구분</h3>
    <div class="table_style">
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
                <SelectBtn 
                  :options=dealTypes 
                  optId="deal_type"
                  type="radio"
                />
              </td>
            </tr>
            <tr>
              <th>매물유형</th>
              <td>
                <SelectBtn 
                  :options=offerTypes 
                  optId="offer_type"
                  type="check"
                />
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
