<template>
  <div>
    <ul class="nav">
      <li class="nav-item"><a href="">이용약관</a></li>
      <li class="nav-item"><a href="">개인정보처리방침</a></li>
      <li class="nav-item"><a href="">고객센터</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
};
</script>

<style lang="scss" scoped>
.nav {
  &-item {
    padding-right: 2em;
    a {
      @include theme-footer-navigation;
      text-decoration: none;
    }
  }
}
</style>
