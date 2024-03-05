<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { RegisterPayload } from "../types/RegisterForm";
import type { FormKitNode } from "@formkit/core";
import axios, { AxiosError } from "axios";
import { handleInvalidForm } from "~~/utils";

const { register } = useAuth();

definePageMeta({
  middleware: ["guest"],
  layout: "centered",
});

const form: Ref<RegisterPayload> = ref<RegisterPayload>({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

async function handleRegister(payload: RegisterPayload, node?: FormKitNode) {
  try {
    await register(payload);
  } catch (error) {
    handleInvalidForm(error, node);
  }
}
</script>

<template>
  <div class="register">
    <h1>Register</h1>
    <FormKit type="form" submit-label="Register" @submit="handleRegister">
      <FormKit type="text" name="name" label="Name" />
      <FormKit type="email" name="email" label="Email" />
      <FormKit type="password" name="password" label="Password" />
      <FormKit
        type="password"
        name="password_confirmation"
        label="Confirm Password"
      />
    </FormKit>
    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
  </div>
</template>