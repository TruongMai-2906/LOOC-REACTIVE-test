<template>
  <div class="signature">
    <div class="container">
      <h1 class="signature__title">가드 시그니처를 선택하는 이유</h1>
      <p class="signature__subtitle">
        많은 기업들이 가드 시그니처를 선택하는 이유, 아래 버튼을 눌러 상세한
        정보를 알아보세요.
      </p>
      <div class="row box">
        <div class="col-lg-3 col-sm-12">
          <div v-for="(item, index) in listLeft" :key="index" class="card-left">
            <i :class="item.icon" class="card-icon"></i>
            <h2 class="card-title">{{ item.title }}</h2>
            <p class="card-content">{{ item.content }}</p>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12">
          <img src="../../assets/img/signature.jpg" alt="" class="image" />
        </div>
        <div class="col-lg-3 col-sm-12">
          <div
            v-for="(item, index) in listRight"
            :key="index"
            class="card-right"
          >
            <i :class="item.icon" class="card-icon"></i>
            <h2 class="card-title">{{ item.title }}</h2>
            <p class="card-content">{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="signature__button clearfix col-md-2 offset-md-5">
        <p>가이드 다운로드</p>
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signature",
  components: {},
  setup() {
    const listLeft = [
      {
        icon: "fas fa-book-open",
        title: "쉽고 편리하게",
        content: "번거로운 절차 없이 누구나 빠르게 계약을 체결할 수 있습니다.",
      },
      {
        icon: "fas fa-hand-holding",
        title: "안전한 보안",
        content: "데이터는 암호화되어 전송되고 안전한 곳에 저장됩니다.",
      },
      {
        icon: "fas fa-file-alt",
        title: "다양한 파일형식",
        content: "한글, 오피스부터 PDF, JPG와 같은 이미지 파일도 변환없이 지원",
      },
    ];

    const listRight = [
      {
        icon: "fas fa-user-circle",
        title: "간단한 본인인증",
        content: "공인인증서와 ActiveX없이도 본인인증을 할 수 있습니다.",
      },
      {
        icon: "fas fa-calendar-minus",
        title: "효율적인 작업",
        content: "자주 사용하는 문서들을 저장하고 불러와 작업할 수 있습니다.",
      },
      {
        icon: "fas fa-book",
        title: "계약서 관리",
        content:
          "관리가 필요한 문서를 한 눈에 보고 체계적으로 관리할 수 있습니다.",
      },
    ];
    return {
      listLeft,
      listRight,
    };
  },
};
</script>

<style lang="scss" scoped>
.signature {
  background-color: $gray_color_6;
  padding: 7.5em 0;
  @media screen and (max-width: 768px) {
    padding: 3.5em 0;
  }
  &__title {
    text-align: center;
    @include theme-title-desktop-dark;
  }
  &__subtitle {
    text-align: center;
    width: 30%;
    margin: 0 auto;
    margin-top: 2.5em;
    @include theme-subtitle-desktop-dark;
    @media screen and (max-width: 768px) {
      width: 95%;
    }
  }
  &__button {
    margin-top: 3.1875em;
    @include theme-button-light;
    @media screen and (max-width: 768px) {
      padding: 0.5em 1.375em;
      width: 50%;
      margin: 0 auto;
      margin-top: 3.1875em;
    }
  }
}
.image {
  width: 100%;
  height: 100%;
}
.box {
  margin-top: 5em;
  @media screen and (max-width: 768px) {
    margin-top: 3em;
  }
}
.card {
  &-left {
    padding-top: 3.375em;
    width: 80%;
    @media screen and (max-width: 768px) {
      text-align: center;
      width: 100%;
      padding-top: 1.375em;
    }
  }
  &-right {
    padding-top: 3.375em;
    text-align: right;
    width: 80%;
    margin-left: auto;
    @media screen and (max-width: 768px) {
      text-align: center;
      width: 100%;
      padding-top: 1.375em;
    }
  }
  &-icon {
    font-size: 1.625em;
  }
  &-title {
    padding-top: 1em;
    @include theme-card-title-desktop-dark;
  }
  &-subtitle {
    padding-top: 1.3125em;
    @include theme-subtitle-desktop-dark;
  }
}
</style>
