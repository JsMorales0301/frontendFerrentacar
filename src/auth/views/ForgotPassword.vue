<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <AlertSuccess v-if="statusRequest === 204" class="w-96" message="Email sent successfully" />
        <AlertError v-if="statusRequest === 400" class="w-96" message="The e-mail does not exist" />

        <div class="card w-96 text-primary-content bg-base-200">
            <div class="card-body">
                <div class="items-center text-center">
                    <h2 class="card-title">Recuperar contraseña</h2>
                </div>

                <form @submit.prevent="sendEmail()">
                    <div class="mb-6 form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Correo electrónico</span>
                        </label>
                        <input
                            type="email"
                            placeholder="example@ferrentacar.com"
                            class="input input-bordered w-full max-w-xs"
                            v-model="recovery.email"
                        />
                    </div>

                    <div class="mt-2 flex flex-col gap-4">
                        <button class="btn btn-block btn-primary">Enviar</button>
                        <button class="btn btn-outline btn-primary mt-4">
                            Volver a iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import AlertSuccess from '@/shared/components/AlertSuccess.vue'
import AlertError from '@/shared/components/AlertError.vue'
const auth = useAuthStore()

const statusRequest = ref()

const recovery = ref({
    email: ''
})

async function sendEmail() {
    const response = await auth.sendEmail(recovery.value.email)
    statusRequest.value = response
    setTimeout(() => {
        statusRequest.value = 0
    }, 1500)
}
</script>
