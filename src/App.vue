<template>
  <div id="app">
    <Header />
      <main>
        <router-view/>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: { Header, Footer }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }

  #app {
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    color: #345;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    main {
      flex: 1;
    }
  }
</style>
