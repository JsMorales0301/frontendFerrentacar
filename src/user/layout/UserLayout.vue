<template>
    <NavbarAuthenticated />
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarAuthenticated from '@/shared/components/NavbarAuthenticated.vue';
</script>

<style scoped></style>
