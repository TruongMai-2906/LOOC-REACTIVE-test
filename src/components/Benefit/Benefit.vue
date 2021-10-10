<template>
  <div class="benefit">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <h1 class="benefit__title col-lg-10 col-sm-12">Easy and quick</h1>
        </div>
        <div class="col-lg-8 col-sm-12">
          <p class="benefit__subtitle">
            가드 시그니처에서는 복잡한 절차를 거치지 않고 수월하게 계약을 진행할
            수 있습니다. 준비해둔 계약 문서를 곧바로 업로드하고, 서명을
            요청하세요. 상대방도 별도의 회원가입이나 복잡한 인증 과정없이 서명이
            가능합니다.<br />
            계약이 진행되는 모든 과정을 효과적으로 체크할 수 있고, 언제 어디서든
            5분이면 계약이 완료됩니다.
            <br />
            <br />
            가드 시그니처와 함께 빠르고 신속하게 상대방과의 계약을 체결하고
            관리하세요.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Benefit",
  components: {},
};
</script>

<style lang="scss" scoped>
.benefit {
  background-color: $main_color;
  padding: 7.5em 0;
  @media screen and (max-width: 768px) {
    padding: 3.5em 0;
  }
  &__title {
    @include theme-montserrat-title2;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  &__subtitle {
    @include theme-subtitle-desktop-light;
    line-height: 1.88;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
}
</style>
