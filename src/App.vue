<template>
  <img alt="Vue logo" src="./assets/logo.png">


  <RouterLink to="/Home">Home</RouterLink>
  <RouterLink to="/login">Login</RouterLink>
  <RouterLink to="/signup">Sign Up</RouterLink>
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
