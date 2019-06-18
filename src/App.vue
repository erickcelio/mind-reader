<template>
  <div id="app">
    <Header />
      <main>
        <transition mode="out-in">
          <router-view/>
        </transition>
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
      padding: 10px;
      overflow: auto;
      flex: 1;
      display: flex;
    }

    .btn {
      @include box-shadow-btn;
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
      font-weight: 600;
      &:hover {
        background-color: $secondary-color;
        transform: scale(1.1);
      }
    }

    .v-enter, .v-leave-to {
      opacity: 0;
    }

    .v-enter {
      transform: translate3d(0, -20px, 0);
    }

    .v-leave-to {
      transform: translate3d(0, 20px, 0);
    }

    .v-enter-active, .v-leave-active {
      transition: all .3s;
    }
  }
</style>
