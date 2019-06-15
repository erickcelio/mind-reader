<template>
  <header>
    <router-link to="/" class="logo">
      <img src="@/assets/images/logo.svg" alt="Ranek">
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/mixins";
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    @include header-box-shadow;
  }

  .logo {
    padding: 10px 0;
    img {
      width: 200px;
    }
  }
</style>
