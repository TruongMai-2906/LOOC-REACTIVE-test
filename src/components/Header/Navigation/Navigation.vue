<template>
  <div :class="classes">
    <ul class="nav">
      <li class="nav-item"><a href="/">서비스 소개</a></li>
      <li class="nav-item"><a href="/">법적효력·보안</a></li>
      <li class="nav-item"><a href="/">활용 분야</a></li>
      <li class="nav-item"><a href="/">이용 혜택</a></li>
      <li class="nav-item"><a href="/">요금 안내</a></li>
      <li class="nav-item"><a href="/">고객센터</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
  props: {
    classes: {
      type: String,
      default: null,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.nav {
  justify-content: center;
  &-item {
    text-align: center;
    padding: 0 0.9375em;
    a {
      @include theme-content-desktop-dark;
      text-decoration: none;
    }
    position: relative;
    z-index: 5;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -50px;
        left: 0;
        background-color: $main_color;
        z-index: 10000;
        transition: 200ms;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 12px
  }
}
</style>