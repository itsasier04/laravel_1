<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { LoginForm } from "../types/LoginForm";

const { login } = useAuth();

const form: Ref<LoginForm> = ref<LoginForm>({
  email: "",
  password: "",
});

definePageMeta({
  middleware: ["guest"],
  layout: "centered",
});
</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="() => login(form)">
      <label>
        <div>Email</div>
        <input v-model="form.email" type="text" />
      </label>

      <label>
        <div>Password</div>
        <input v-model="form.password" type="password" />
      </label>
      <button class="btn">Login</button>
    </form>

    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register"
        >Register now!</NuxtLink
      >
    </p>
  </div>
</template>