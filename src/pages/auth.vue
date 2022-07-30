<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import mlAuth from 'mlauth-js'
import Logos from './../components/logos.vue'

const client = new mlAuth({
  key: import.meta.env.VITE_MLAUTH_CLIENT,
  secret: import.meta.env.VITE_MLAUTH_SECRET
})
const route = useRoute()
let response = ref("")

async function verify() {
  response.value = await client.verify(route.query.token)
}
verify()
</script>

<template>
  <div>
    <h1>mlAuth Front-end Example</h1>
  </div>

  <div>
    <h2>(Verification Page)</h2>
  </div>

  <Logos/>

  <div v-if="response">
    <em>response: {{response}}</em>
  </div>
</template>
