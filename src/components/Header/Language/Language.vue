<template>
  <div :class="classes">
    <ul class="nav">
      <li class="nav-item"><a href="/">로그인</a></li>
      <li class="nav-item"><a href="/">회원가입</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Language",
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
  justify-content: flex-end;
  &-item {
    text-align: right;
    padding: 0 0.9375em;
    a {
      @include theme-content-desktop-dark2;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
}
</style>