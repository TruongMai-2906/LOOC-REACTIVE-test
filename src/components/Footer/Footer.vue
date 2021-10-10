<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <Navigation />
        <p class="contact">
          (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 :
          356-00-00000<br />
          이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000<br />
          서울특별시 강남구 도산대로 8길 17 3층 <br />
          <br />
          Copyright© GUARDSIGNATURE All rights reserved.
        </p>
        <div class="group-button">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-facebook"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation/Navigation.vue";

export default {
  name: "Footer",
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  @include theme-contact;
  margin-top: 1em;
}
.footer {
  &-content {
    margin: 3.75em 0;
    position: relative;
  }
}
.group-button {
  position: absolute;
  top: 0;
  right: 0;
  i {
    padding-left: 1em;
    font-size: 1.125em;
  }
}
</style>
