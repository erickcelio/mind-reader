<template>
  <footer>
    <p>
      Without copyright
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  @import "../assets/scss/colors";
  background: $primary-color;
  padding: 15px 0;
  text-align: center;
  font-size: 1.2rem;
  color: white;
  position: relative;
}
</style>
