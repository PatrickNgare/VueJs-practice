<template>
    <h1>Login </h1>

    <h2>Name:: {{login}} </h2>

    </template>
    
    <script>

    import { useRoute } from 'vue-router'
    export default {
      
      name: 'login-com',
      data(){
        return{
          login:'',
        }
      },
     
      
      mounted(){
        const route = useRoute();
        this.login=route.params.name;
      }
     
    }
    
    
    </script>
    
    <style scoped>
    
    
    
    </style>