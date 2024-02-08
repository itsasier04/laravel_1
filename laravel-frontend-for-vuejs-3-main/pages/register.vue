<script setup lang="ts">
import { ref } from "vue"
import axios from "axios"
definePageMeta({
  layout: "centered",
});

interface camposForm {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
})

const router = useRouter();

async function register(form: camposForm) {
  let responseRegister
  try{
    responseRegister = await axios.post("http://localhost/api/register", form)
    router.push("/login")
  } catch (e) {
    console.log(`Ha ocurrido un error: ${e}`)
  }
}
</script>
<template>
  <pre>
    {{ form }}
  </pre>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="() => register(form)">
      <label>
        <div>Name</div>
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        <div>Email</div>
        <input v-model="form.email" type="email" required/>
      </label>

      <label>
        <div>Password</div>
        <input v-model="form.password" type="password" required/>
      </label>

      <label>
        <div>Confirm Password</div>
        <input v-model="form.password_confirmation" type="password" required/>
      </label>

      <button class="btn">Register</button>
    </form>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
  </div>
</template>
