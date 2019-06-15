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
  @import "assets/scss/colors";
  @import "assets/scss/mixins";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
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
      display: flex;
    }

    .btn {
      @include box-shadow-default;
      display: block;
      padding: 10px 30px;
      background: $primary-color;
      border-radius: 4px;
      color: #fff;
      text-align: center;
      font-size: 1rem;
      transition: all .3s;
      border: none;
      font-family: "Avenir", "Arial", "Helvetica", "sans-serif";
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: $secondary-color;
        transform: scale(1.1);
      }
    }
  }
</style>
