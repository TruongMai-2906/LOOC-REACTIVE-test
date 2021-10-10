<template>
  <div class="row item">
    <img :src="`${src}`" alt="item" />
    <p class="title">{{ title }}</p>
    <p class="subtitle" v-html="subtitle"></p>
  </div>
</template>

<script>
export default {
  name: "ProcedureItem",
  components: {},
  props: {
    src: {
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
.item {
  padding: 3.75em;
  @media screen and (max-width: 768px) {
    padding: 1.75em
  }
}
img {
  width: 90px;
  height: 90px;
  padding: 0;
  margin: 0 auto;
}
.title {
  text-align: center;
  margin-top: 1em;
  @include theme-card-title-desktop-dark;
}
.subtitle {
  text-align: center;
  @include theme-subtitle-desktop-dark;
}
</style>
