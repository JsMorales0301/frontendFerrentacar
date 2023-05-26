<template>
    <div class="h-screen w-screen flex justify-center items-center">
        <div class="flex flex-col items-center gap-4">

            <AlertSuccess v-if="statusCode === 200" message="Successful Login" />
            <AlertError v-if="statusCode === 400" message="Invalid email or password"  />

            <div class="card w-96 bg-base-200 shadow-md">
                <div class="card-body">
                    <h2 class="card-title text-center">Login</h2>
                    <LoginForm @status-logged="isStatus" />
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
import LoginForm from '../components/LoginForm.vue'
import AlertSuccess from '@/shared/components/AlertSuccess.vue';
import AlertError from '@/shared/components/AlertError.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const statusCode = ref<number>()
const router = useRouter()

const isStatus = (status: number) => {
    statusCode.value = status
    
    setTimeout(() => {
        statusCode.value = 0
        if(status == 200) {
            router.push({ name: 'home' })
        }
    }, 1500)
}
</script>
