<template>
  <img alt="Vue logo" src="./assets/logo.png">


  <RouterLink to="/Home">Home</RouterLink>&nbsp;&nbsp;
  <RouterLink to="/login/stark">Login</RouterLink>&nbsp;&nbsp;
  <RouterLink to="/signup/newuser">Sign Up</RouterLink>&nbsp;&nbsp;
  <RouterView>  </RouterView>

 <!--  <h3 v-for="item in info" :key="item.id">
    {{ item.id }} | {{ item.first_name }} | {{ item.last_name }} | {{ item.email }}
  </h3> -->

  <table>
    <tr>
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Picture</th>
      </tr>

    <tr v-for="item in info" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.first_name }}</td>
      <td>{{ item.last_name }}</td>
      <td>{{ item.email }}</td>
      <td><img :src="item.avatar" alt="avatar" width="50" height="50"></td>
    </tr>
  </table>
</template>

<script>

import axios from 'axios';
export default {
  name: 'App',
  
    data(){
       
      return{
        info:[],
      }

    },
    async mounted(){
      let information= await axios.get("https://reqres.in/api/users?page=2");
       console.log("Api data", information.data.data);
       this.info=information.data.data;
  
  },
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


.styled-table {
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.styled-table th,
.styled-table td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.styled-table th {
  background-color: #4caf50;
  color: white;
}

.styled-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.styled-table tr:hover {
  background-color: #ddd;
}

.styled-table img {
  border-radius: 50%;
}
</style>
