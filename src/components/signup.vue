<template>
    <h1>Sign up  page</h1>

    <div id="app">
    <div id="alert" v-if="alert">{{ alert }}</div>

    <form @submit.prevent="loginWithPassword">
      <label>
        Email or username
        <input type="text" v-model="emailOrUsername" />
      </label>
      <label>
        Password
        <input type="password" v-model="password" />
      </label>
      <button type="submit">Log in</button>
    </form>

    <p>or</p>

    <button @click.prevent="loginWithSSO">
      Log in with Google
    </button>
  </div>
    </template>
    
    <script>
    export default {
      name: 'signup-com',
     
    }
    
    
    </script>
    
    <style scoped>
    
    
    
    </style>