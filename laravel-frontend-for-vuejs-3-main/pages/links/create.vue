<script setup lang="ts">
import type {FormKitNode} from '@formkit/core';
import axios from 'axios';
import {nanoid} from "nanoid";
import { loginData } from '~~/types';

definePageMeta({
  middleware: ["auth"]
});


async function createLink(payload:loginData, node?:FormKitNode) {
  try {
    await axios.post("/links", {
      ...payload,
      short_link: nanoid(8)
    });

    navigateTo("/links");
  } catch (err) {
    handleInvalidForm(err, node);
  }
}

</script>
<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Create Link" @submit="createLink" novalidate>
    <FormKit label="Link" type="url" name="full_link"></FormKit>
  </FormKit>
</template>
