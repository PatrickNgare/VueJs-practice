<template>
  <img alt="Vue logo" src="./assets/logo.png">


  <RouterLink to="/Home">Home</RouterLink>&nbsp;&nbsp;
  <RouterLink to="/login/stark">Login</RouterLink>&nbsp;&nbsp;
  <RouterLink to="/signup/newuser">Sign Up</RouterLink>&nbsp;&nbsp;
  <RouterView>  </RouterView>

</template>

<script>


export default {
  name: 'App',
  components: {

  
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
