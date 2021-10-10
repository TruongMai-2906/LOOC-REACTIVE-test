<template>
  <div class="start-now">
    <p class="start-now__slogan">지금 바로 시작하세요!</p>
    <div class="">
      <h1 class="start-now__title col-md-6 offset-md-3">
        설명이 필요 없는 간단한 계약 과정, <br />직접 경험해보세요!
      </h1>
    </div>
    <div class="start-now__button clearfix col-md-2 offset-md-5">
      <p>더 살펴보기</p>
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
  <!-- <div></div> -->
</template>

<script>
export default {
  name: "StartNow",
  components: {},
  props: {},
};
</script>

<style lang="scss" scoped>
.start-now {
  padding: 5em 0;
  max-width: 100%;
  background-color: $gray_color_6;
  &__slogan {
    text-align: center;
    @include theme-subtitle-desktop-blue;
  }
  &__title {
    text-align: center;
    @include theme-title-desktop-dark;
  }
  &__button {
    margin-top: 3.1875em;
    @include theme-button-blue;
    @media screen and (max-width: 768px) {
      padding: 0.5em 1.375em;
      width: 50%;
      margin: 0 auto;
      margin-top: 3.1875em;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 3em 0;
  }
}
</style>
