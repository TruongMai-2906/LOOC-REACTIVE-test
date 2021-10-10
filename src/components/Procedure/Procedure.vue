<template>
  <div class="procedure">
    <div class="container">
      <h1 class="procedure__title">간단하게 끝내는 계약과정</h1>
      <p class="procedure__subtitle">
        계약서 파일을 업로드하여 서명을 요청해 보세요. <br />상대방은 회원가입
        없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다. <br />언제
        어디서든 5분만에 계약을 체결해 보세요.
      </p>
      <ProcedureList />
    </div>
  </div>
</template>

<script>
import ProcedureList from "./ProcedureList/ProcedureList.vue";
export default {
  name: "Procedure",
  components: {
    ProcedureList,
  },
};
</script>

<style lang="scss" scoped>
.procedure {
  padding: 7.5em 0;
  &__title {
    text-align: center;
    @include theme-title-desktop-dark;
  }
  &__subtitle {
    text-align: center;
    padding: 2.5em 0;
    @include theme-subtitle-desktop-dark;
  }
  @media screen and (max-width: 768px) {
    padding: 3.5em 0;
  }
}
</style>
