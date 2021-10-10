<template>
  <div class="banner">
    <img src="../../assets/img/banner-img-2@3x.png" alt="banner" />
    <div class="abs-content">
      <div class="container inner">
        <div class="banner-content">
          <h1 class="banner-content__title">
            모든 계약을 쉽고<br />간단하게, 빠르게 처리하세요.
          </h1>
          <div class="row">
            <p class="banner-content__subtitle col-lg-3 col-md-12 col-sm-12">
              가드 시그니처를 이용하면 어떤 계약이든 복잡한 과정없이 간편하고
              손쉽게 처리할 수 있고, 문서 처리 및 관리까지 편리하게 이용할 수
              있습니다.
            </p>
          </div>
          <div class="banner-content__button">
            <p class="banner-content__button-title">지금 확인하기</p>
            <div class="banner-content__button-icon">
              <i class="fas fa-chevron-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  components: {},
  props: {},
  setup() {},
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  img {
    width: 100%;
    height: auto;
    @media screen and (max-width: 768px) {
      height: 230px;
    }
  }

  .abs-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .inner {
      height: 100%;
      position: relative;
    }
  }

  &-content {
    vertical-align: middle;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    &__title {
      @include theme-banner-title;
      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }
    &__subtitle {
      padding-top: 2.75em;
      @include theme-banner-subtitle;
      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }
    &__button {
      padding-top: 6.25em;
      @media screen and (max-width: 768px) {
        text-align: center;
      }
      &-title {
        display: inline-block;
        @include theme-banner-button-text;
        @media screen and (max-width: 768px) {
          margin-bottom: 0;
        }
      }
      &-icon {
        display: inline-block;
        font-size: 2.1875em;
        margin-left: 1.1875em;
        transform: translateY(7px);
        color: $white-color;
      }
    }
  }
}
@media screen and (max-width: 1140px) {
  .banner {
    &-content {
      &__subtitle {
        padding-top: 0;
      }
      &__button {
        padding-top: 0;
      }
    }
  }
}
</style>