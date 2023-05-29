import { defineStore } from 'pinia'
import { ref } from 'vue'

import { authEndpoints } from '../endpoints/authEndpoints'
import { AxiosSingleton } from '@/api/AxiosSingleton'
import type { LoginRequest } from '../interfaces/loginRequest'
import type { LoginResponse } from '../interfaces/loginResponse'
import type { RegisterRequest } from '../interfaces/registerRequests'

export const useAuthStore = defineStore('auth', () => {
    const dataUser = ref<LoginResponse>()

    async function loginUser(credentials: LoginRequest) {
        try {
            const { data, status } = await AxiosSingleton.getInstance().post<LoginResponse>(
                authEndpoints.login,
                credentials
            )
            dataUser.value = data
            await getDataUser(data.email)
            localStorage.setItem('info-user', JSON.stringify(dataUser.value))
            return status
        } catch (error) {
            console.log(error)
            return 400
        }
    }

    async function registerUser(data: RegisterRequest) {
        try {
            const response = await AxiosSingleton.getInstance().post(authEndpoints.register, data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    async function getDataUser(email: string) {
        try {
            const { data } = await AxiosSingleton.getInstance().post(authEndpoints.dataUser, {
                email
            })
            localStorage.setItem('dataUser', JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }

    async function sendEmail(email: string) {
        try {
            const { status } = await AxiosSingleton.getInstance().post(authEndpoints.sendEmail, {
                email: email
            })

            return status
        } catch (error) {
            console.log(error)
            return 400
        }
    }

    return { dataUser, loginUser, registerUser, sendEmail }
})
