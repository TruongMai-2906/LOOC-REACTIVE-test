<template>
  <div class="service-text-left">
    <div class="container">
      <div class="row">
        <div class="container-left col-lg-6 col-sm-12">
          <div class="content">
            <p class="page">{{ page }}</p>
            <h1 class="title">{{ title }}</h1>
            <p class="subtitle">
              {{ subtitle }}
            </p>
          </div>
        </div>
        <div class="container-right col-lg-6 col-sm-12">
          <img :src="src" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceTextLeft",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
    page: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.service-text-left {
  background-color: $gray_color_6;
  padding: 7.5em 0;
  @media screen and (max-width: 768px) {
    padding: 3.5em 0;
  }
}
.content {
  vertical-align: middle;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 2.5em;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
    padding-right: 0;
  }
}
.page {
  @include theme-montserrat-title;
}
.title {
  width: 50%;
  margin-top: 1em;
  margin-left: auto;
  @include theme-title-desktop-dark;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.subtitle {
  width: 70%;
  margin-top: 1em;
  margin-left: auto;
  @include theme-subtitle-desktop-dark;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.container-right img {
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
}
</style>

