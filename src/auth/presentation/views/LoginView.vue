<template>
    <div class="h-screen w-screen flex justify-center items-center">
        <div class="flex flex-col items-center gap-4">
            <div class="card w-96 bg-base-200 shadow-md">
                <div class="card-body">
                    <h2 class="card-title text-center">Login</h2>

                    <LoginForm />

                </div>
            </div>

            <div class="card w-96 bg-base-200 shadow-md">
                <div class="card-body">
                    <h2 class="card-title text-base">
                        New to FerRentaCar?
                        <RouterLink
                            class="link link-hover text-base link-primary"
                            :to="{ name: 'register-user' }"
                            >Create an account</RouterLink
                        >
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import LoginForm from '../components/LoginForm.vue';


</script>
