<template>
  <div>
    <Header />
    <Banner />
    <Procedure />
    <StartNow />
    <Services />
    <Benefit />
    <Commitment />
    <Signature />
    <Footer />
  </div>
</template>

<script>
import Banner from './components/Banner/Banner.vue'
import Benefit from './components/Benefit/Benefit.vue'
import Commitment from './components/Commitment/Commitment.vue'
import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'
import Procedure from './components/Procedure/Procedure.vue'
import Services from './components/Services/Services.vue'
import Signature from './components/Signature/Signature.vue'
import StartNow from './components/StartNow/StartNow.vue'
export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Procedure,
    StartNow,
    Services,
    Benefit,
    Commitment,
    Signature,
    Footer,
  }
}
</script>

<style>

</style>
