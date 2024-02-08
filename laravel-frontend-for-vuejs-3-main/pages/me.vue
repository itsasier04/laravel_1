<template>
    <p><strong>User Name:</strong> {{ user.name }}</p>
    <p><strong>User Email:</strong> {{ user.email }}</p>
</template>

<script setup lang="ts">
import axios from 'axios';

const user = ref({
  name: '',
  email: ''
});

const fetchUserData = async () => {
  try {
    const response = await axios.get('/user');
    user.value = response.data;
  } catch (error) {
    console.error('Error fetching user data', error);
  }
};

onMounted(fetchUserData);
</script>
