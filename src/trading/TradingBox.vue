<script setup>
import { defineProps} from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  title: String,
  icoTxt:String,
  offerInfo: String,
  lists: {
    type: Object,
    required: false,
    default: () => ({})
  },
  numClass:String,
  icoBg:String,
  link:String,
  contrtDate:String
});
const router = useRouter();
const navigate = () => {
  if (props.link) {
    router.push(`/${props.link}`);
  }
};
</script>
<template>
   <div class="box_wrap">
    <a href="#" class="box trading_box"  @click.prevent="navigate">
        <h3 class="title">{{title}}</h3><span :class="['rd_ico',  icoBg ? icoBg : 'red']"  v-if="icoTxt">{{icoTxt}}</span>
        <p>{{offerInfo}}</p>
        <ul class="info_list"><li v-for="(list, index) in lists" :key="index">{{list.listTit}}<span :class="numClass">{{list.listVal}}</span></li></ul>
        <p v-if="contrtDate">{{contrtDate}}</p>
    </a>
  </div>
</template>