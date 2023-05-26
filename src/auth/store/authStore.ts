import { defineStore } from 'pinia'
import { ref } from 'vue'

import { authEndpoints } from '../endpoints/authEndpoints'
import { AxiosSingleton } from '@/api/AxiosSingleton'
import type { LoginRequest } from '../interfaces/loginRequest'
import type { LoginResponse } from '../interfaces/loginResponse'

export const useAuthStore = defineStore('auth', () => {
    const dataUser = ref<LoginResponse>()

    async function loginUser(credentials: LoginRequest) {
        try {
            const { data, status } = await AxiosSingleton.getInstance().post<LoginResponse>(
                authEndpoints.login,
                credentials
            )
            dataUser.value = data
            return status
        } catch (error) {
            console.log(error)
            return 400;
        }
    }

    return { dataUser, loginUser }
})
