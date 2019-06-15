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
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);;
  }

  .logo {
    padding: 10px 0;
    img {
      width: 200px;
    }
  }
</style>
