<template>
    <div class="flex flex-col items-center p-8 gap-4">
        <div class="card bg-base-300 w-[28rem] shadow-md">
            <div class="card-body">
                <h2 class="card-title">Create Account</h2>

                <RegisterForm />
            </div>
        </div>

        <div class="card w-[28rem] bg-base-200 shadow-md">
            <div class="card-body">
                <h2 class="card-title text-base">
                    Already have an account?
                    <RouterLink
                        class="link link-hover text-base link-primary"
                        :to="{ name: 'login-user' }"
                        >Login to account</RouterLink
                    >
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RegisterForm from '../components/RegisterForm.vue'
</script>

<style scoped></style>
