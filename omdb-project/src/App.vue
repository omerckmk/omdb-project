<template>
  <div id="app" >
    <div id="nav" class="popover-header">
      <router-link to="/">Home</router-link> |
      <router-link to="/favorite">Favorite</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style >
  html{
    height: 100% !important;
  }
  body {
    background: #2193b0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding-bottom: 20px;
  padding-top: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 24px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
