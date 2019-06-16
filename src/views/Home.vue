<template>
  <div id="home">
    <router-link to="/trick" class="btn">
      Start
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped lang="scss">
  #home {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      font-weight: 600;
      padding: 15px 50px;
    }
  }
</style>
