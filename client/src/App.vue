<template>
  <div id="app">

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #000000;
  padding: 30px;

  a {
    font-weight: bold;
    color: #f8f8f8;
    font-size: 20px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ffe601;
    }
  }
}
.harika {
  list-style-type: none;
  padding: 0;
  position: relative;
  left: 40%;
}
.h {
  display: inline-block;
  margin: 0 7px;
}
    .form-group{
  position:relative;
  align-content: center;
  align-items: center;
  left: 50%;
}
body {
  background-color: #000000;
}
</style>
