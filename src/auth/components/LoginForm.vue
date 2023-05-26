<template>
    <form @submit.prevent="loginUser()">
        <div class="mb-4">
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Email address</span>
                </label>
                <input
                    v-model="credentials.email"
                    type="text"
                    placeholder="example@ferrentacar.com"
                    class="input input-bordered w-full max-w-xs"
                />
            </div>
        </div>

        <div class="mb-4">
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Password</span>
                </label>
                <input
                    v-model="credentials.password"
                    type="password"
                    placeholder="**********"
                    class="input input-bordered w-full max-w-xs"
                />
            </div>
        </div>

        <button type="submit" class="my-4 btn btn-primary btn-block">Login</button>
        <div class="flex justify-center">
            <RouterLink class="link link-primary link-hover text-base" :to="{ name: '' }"
                >Forgot password</RouterLink
            >
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { LoginRequest } from '../interfaces/loginRequest'
import { useAuthStore } from '../store/authStore'

const emit = defineEmits(['statusLogged'])

const credentials = ref<LoginRequest>({
    email: '',
    password: ''
})
const useAuth = useAuthStore()

const loginUser = async () => {
    const status = await useAuth.loginUser(credentials.value)
    emit('statusLogged', status)
}
</script>
