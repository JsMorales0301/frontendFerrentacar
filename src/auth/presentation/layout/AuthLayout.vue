<template>
    <NavBar />
    <RouterView />
</template>

<script setup lang="ts">
import NavBar from '@/root/presentation/components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
