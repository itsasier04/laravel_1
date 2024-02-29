<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Update Link">
    <FormKit type="text" name="short-link" label="Short Link" />
    <FormKit type="url" name="full-link" label="Full Link" />
  </FormKit>
</template>