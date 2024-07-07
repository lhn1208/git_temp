<script setup>

</script>
<template>
   <div class="box_wrap appdown_box">
        <div class="box flex_both_ends">
            <strong>앱을 다운받으세요!!</strong>
            <div>  
                <label class="screen_out" for="phoneNumber">휴대폰번호 입력</label>
                <input type="text" id="phoneNumber" class="phone_num" placeholder="휴대폰번호 입력">
                <button>앱 링크 전송</button>
            </div>
        </div>
    </div>
</template>
<style>
.appdown_box{position: relative; padding-top: 95px; background:url("/src/assets/images/main/app_bg.png") no-repeat; background-position: calc(100% - 30px) top;}
.appdown_box strong{position: relative; font-size:24px; font-weight: 500; padding-left: 74px; line-height: 50px;}
.appdown_box strong::before{content: ""; position: absolute; top:0; left: 0; width: 58px; height:58px; background:url("/src/assets/images/main/ico_app.png");}
.appdown_box .box{padding: 32px 50px 40px 75px;}
.appdown_box .phone_num{width: 240px; height: 50px;}
.appdown_box button{width: 120px; height: 55px; margin-left: 20px; border-radius: 5px; background: var(--c-grass); color: #fff; font-weight: 500; font-size: var(--font-cont-tit); vertical-align: middle;}
</style>