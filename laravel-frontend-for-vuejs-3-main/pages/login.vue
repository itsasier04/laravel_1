<script setup lang="ts">
import { ref } from "vue"
import axios from "axios"
definePageMeta({
  layout: "centered",
});

interface camposForm {
  email: string,
  password: string
}

const form = ref({
  email: "",
  password: ""
})
const router = useRouter();

async function login(form: camposForm) {
  let responseLogin
  try{
    responseLogin = await axios.post("http://localhost/api/login", form)
    router.push("/me");    
  } catch (e) {
    console.log(`Ha ocurrido un error: ${e}`)
  }
}
</script>
<template>
  <pre>
    {{ form }}
  </pre>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="() => login(form)">
      <label>
        <div>Email</div>
        <input v-model="form.email" type="text" required />
      </label>

      <label>
        <div>Password</div>
        <input v-model="form.password" type="password" required/>
      </label>
      <button class="btn">Login</button>
    </form>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login"
        >Login now!</NuxtLink
      >
    </p>
  </div>
</template>
