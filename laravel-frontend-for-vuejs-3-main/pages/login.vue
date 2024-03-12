<script setup lang="ts">
import axios, { AxiosError } from "axios";
import { ref, type Ref } from "vue";
import type { loginData, ErrorResponse } from "../types/index";
import type { FormKitNode } from "@formkit/core";
import { handleInvalidForm } from "~~/utils";

const { login } = useAuth();

const errors = ref({
  email: [],
  password: [],
});

async function handleLogin(payload: loginData, node?: FormKitNode) {
  try {
    await login(payload);
  } catch (error) {
    handleInvalidForm(error, node);
  }
}

definePageMeta({
  middleware: ["guest"],
  layout: "centered",
});
</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <FormKit type="form" submit-label="Login" @submit="handleLogin">
      <FormKit label="Email" name="email" type="email" />
      <FormKit label="Password" name="password" type="password" />
    </FormKit>
    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register"
        >Register now!</NuxtLink
      >
    </p>
  </div>
</template>