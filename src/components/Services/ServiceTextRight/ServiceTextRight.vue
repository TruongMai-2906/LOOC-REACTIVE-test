<template>
  <div class="service-text-right">
    <div class="container">
      <div class="row">
        <div class="container-left col-lg-6 col-sm-12">
          <img :src="src" alt="" />
        </div>
        <div class="container-right col-lg-6 col-sm-12">
          <div class="content">
            <p class="page">{{ page }}</p>
            <h1 class="title">{{ title }}</h1>
            <p class="subtitle">
              {{ subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceTextRight",
  components: {},
  props: {
    src: {
      type: String,
      default: '',
    },
    page: {
      type: String,
      default: 'ssda',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    }
  },
};
</script>

<style lang="scss" scoped>
.service-text-right {
  background-color: $white-color;
  padding: 7.5em 0;
  @media screen and (max-width: 768px) {
    padding: 3.5em 0;
  }
}
.container-left {
  img {
    width: 100%;
  }
}
.content {
  vertical-align: middle;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 2.5em;
  @media screen and (max-width: 768px) {
    text-align: center;
    padding-left: 0;
  }
}
.page {
  @include theme-montserrat-title;
}
.title {
  width: 50%;
  margin-top: 1em;
  @include theme-title-desktop-dark;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.subtitle {
  width: 70%;
  margin-top: 1em;
  @include theme-subtitle-desktop-dark;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.container-left img {
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
}
</style>

