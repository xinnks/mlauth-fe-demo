<script setup>
import mlAuth from 'mlauth-js'
import Logos from './../components/logos.vue'

const client = new mlAuth({
  client: import.meta.env.VITE_MLAUTH_CLIENT,
  secret: import.meta.env.VITE_MLAUTH_SECRET
})
let email = ref("")
let response = ref("")

async function login() {
  client.login(email.value)
    .then(res => {
      response.value = res
    })
    .catch(err => console.log({err}))
}
import {ref} from "vue";
</script>

<template>
  <div>
    <h1>mlAuth Front-end Example</h1>
  </div>

  <div>
    <h2>(Auth Page)</h2>
  </div>

  <Logos/>

  <div>
    <input v-model="email" type="email">
    <button @click="login()">Login</button>
  </div>

  <div v-if="response">
    <em>response: {{ response }}</em>
  </div>
</template>

<style scopped>
input{
  font-size: 16px;
  padding: 4px;
}
button{
  margin-left: 4px;
}
</style>