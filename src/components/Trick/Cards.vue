<template>
  <div id="cards">
    <span>a</span>
  </div>
</template>

<script>
export default {
  name: 'Cards'
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  #cards {
    @include column;
    flex: 1;
    width: 100%;
    align-items: center;
  }
</style>
