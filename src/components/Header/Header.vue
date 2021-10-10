<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="logo col-lg-2 col-md-12 col-sm-12">Guard Signature</div>
        <Navigation classes="col-lg-8 col-md-12 col-sm-12 center-box" />
        <Language class="col-lg-2 col-md-12 col-sm-12 center-box" />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../Header/Navigation/Navigation.vue";
import Language from "./Language/Language.vue";
export default {
  name: "Header",
  components: {
    Navigation,
    Language,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.header {
  padding: 2.1875em 0 2.1875em;
  position: relative;
  border-bottom: 1px solid $main-color;
  .center-box {
    margin: auto;
  }
  .logo {
    @include theme-logo;
    padding-right: 4.0625em;
  }
}
@media screen and (max-width: 768px) {
  .logo {
    text-align: center;
    padding-right: 0 !important;
    border-bottom: 1px solid;
    padding-bottom: 10px;
  }
}
</style>