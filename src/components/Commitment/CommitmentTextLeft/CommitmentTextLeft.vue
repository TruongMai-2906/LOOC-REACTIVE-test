<template>
  <div class="row commitment-left">
    <div class="left col-lg-4 col-sm-12">
      <h1 class="title">{{ commitmentList.title }}</h1>
      <div
        v-for="(item, index) in commitmentList.list"
        :key="index"
        class="item"
      >
        <h2 class="card-title">{{ item.title }}</h2>
        <p class="card-content">{{ item.content }}</p>
      </div>
    </div>
    <div class="right col-lg-8 col-sm-12 image">
      <img :src="src" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CommitmentTextLeft",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
    commitmentList: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.commitment-left {
  padding-bottom: 7.5em;
  @media screen and (max-width: 768px) {
    padding-bottom: 3.5em;
  }
}
.item {
  margin-top: 2em;
}
.image {
  text-align: center;
  margin: auto;
}
.title {
  width: 80%;
  @include theme-title-desktop-dark;
  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
}
.card-title {
  @include theme-card-title-desktop-dark;
}
.card-content {
  @include theme-subtitle-desktop-dark;
}
@media screen and (max-width: 768px) {
  .left {
    border: 1px solid $black-color;
  }
  .right {
    img {
      display: none;
    }
  }
}
</style>
