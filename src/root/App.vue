<template>
    <RouterView />
</template>

<script setup lang="ts">
import { useAuthStore } from '@/auth/store/authStore'
import { RouterView } from 'vue-router'

const dataLocalStorage = localStorage.getItem('info-user')
const dataUser = JSON.parse(dataLocalStorage!)

const auth = useAuthStore()
auth.dataUser = dataUser
</script>

<style scoped></style>
