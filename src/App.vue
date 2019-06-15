<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body, ul, li, h1, h2, p {
  margin: 0;
  padding: 0;
}

* {
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
}
</style>
