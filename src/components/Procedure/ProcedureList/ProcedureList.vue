<template>
  <div class="row">
    <ProcedureItem class="col-lg-3 col-sm-6" v-for="item of procedureList" :key="item" :src="item.src" :title="item.title" :subtitle="item.subtitle"/>
  </div>
</template>

<script>
import ProcedureItem from './ProcedureItem.vue'
// import item1 from '../../../assets/img/upload-icon-2.png';
import item2 from '../../../assets/img/upload-icon-2.png';
import item3 from '../../../assets/img/upload-icon-3.png';
import item4 from '../../../assets/img/upload-icon-4.png';

export default {
  name: 'ProcedureList',
  components: {
    ProcedureItem,
  },
  setup() {
    const procedureList = [
      {
        src: item2,
        title: '업로드하기',
        subtitle: '필요한 계약서 파일을업로드합니다.',
      },
      {
        src: item2,
        title: '서명 요청하기',
        subtitle: '업로드한 계약서 파일에서명 요청을 하세요.',
      },
      {
        src: item3,
        title: '서명 입력하기',
        subtitle: '상대방이 간단한 절차를 통해서명할 수 있습니다.',
      },
      {
        src: item4,
        title: '계약 완료',
        subtitle: '언제 어디서든 <br> 5분 만에 계약 완료!',
      }
    ]
    return {
      procedureList
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
