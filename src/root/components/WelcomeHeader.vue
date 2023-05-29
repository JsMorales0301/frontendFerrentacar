<template>
    <header aria-label="Page Header">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="text-center sm:text-left">
                    <h1 class="text-4xl font-bold text-gray-900 sm:text-4xl">
                        Bienvenido/a, {{ auth.dataUser?.nombre }}!
                    </h1>

                    <p class="mt-1.5 text-sm text-gray-500">
                        Estas listo para tu siguiente viaje! 🎉
                    </p>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../auth/store/authStore'

const auth = useAuthStore()
</script>
