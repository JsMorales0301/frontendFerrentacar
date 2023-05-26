<template>
    <form @submit.prevent="createNewUser()" class="grid grid-cols-12 gap-2">
        <div class="col-span-12">
            <div class="mb-4 form-control">
                <label class="label">
                    <span class="label-text">Your Name</span>
                </label>
                <div class="input-group">
                    <input
                        v-model="dataRegister.nombre"
                        type="text"
                        placeholder="First Name"
                        class="input input-bordered w-full"
                    />
                    <input
                        v-model="dataRegister.apellido"
                        type="text"
                        placeholder="Last Name"
                        class="input input-bordered w-full"
                    />
                </div>
            </div>
        </div>

        <div class="col-span-12 mb-4">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Email address</span>
                </label>
                <input
                    v-model="dataRegister.email"
                    type="text"
                    placeholder="example@ferrentacar.com"
                    class="input input-bordered w-full"
                />
            </div>
        </div>

        <div class="col-span-12 mb-4">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Number Identification</span>
                </label>
                <input
                    v-model="dataRegister.numeroDeIdentificacion"
                    type="text"
                    placeholder="example@ferrentacar.com"
                    class="input input-bordered w-full"
                />
            </div>
        </div>

        <div class="col-span-6 mb-4">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Birthdate</span>
                </label>
                <input
                    v-model="unconvertedDate"
                    type="date"
                    placeholder="example@ferrentacar.com"
                    class="input input-bordered w-full"
                />
            </div>
        </div>

        <div class="col-span-6 mb-4">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Phone number</span>
                </label>
                <input
                    v-model="dataRegister.telefono"
                    type="text"
                    placeholder="310 311 3203"
                    class="input input-bordered w-full"
                />
            </div>
        </div>

        <div class="col-span-12 mb-4">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Profile Photo</span>
                </label>
                <input
                    type="file"
                    class="file-input file-input-bordered w-full"
                    @change="uploadImage"
                />
            </div>
        </div>

        <div class="col-span-12 mb-4">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Password</span>
                </label>
                <input
                    v-model="dataRegister.password"
                    type="password"
                    placeholder="**********"
                    class="input input-bordered w-full"
                />
            </div>
        </div>

        <div class="col-span-12 mt-4">
            <button type="submit" class="btn btn-primary btn-block">Create Account</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { RegisterRequest } from '../interfaces/registerRequests'
import { AxiosCloudinarySingleton } from '../../api/cloudinary'

import { useAuthStore } from '../store/authStore'

const dataRegister = ref<RegisterRequest>({
    numeroDeIdentificacion: '',
    urlFotoPerfil: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    email: '',
    password: '',
    telefono: '',
    estado: true
})

const unconvertedDate = ref()
const imageProfile = ref()
const CLOUDINARY_PRESET_PROFILE = 'profile-ferrentacar'
const auth = useAuthStore()

const uploadImage = (event: any) => {
    imageProfile.value = event.target.files[0]
}

const dateFormatISO = (date: any) => {
    const fecha = new Date(date)
    const fechaISO = fecha.toISOString()
    return fechaISO
}

const saveImageCloudinary = async () => {
    const formData = new FormData()
    formData.append('upload_preset', CLOUDINARY_PRESET_PROFILE)
    formData.append('file', imageProfile.value)
    const { data } = await AxiosCloudinarySingleton.getInstance().post('/upload', formData)
    dataRegister.value.urlFotoPerfil = data.secure_url
}

const createNewUser = async () => {
    await saveImageCloudinary()
    dataRegister.value.fechaNacimiento = dateFormatISO(unconvertedDate.value)
    await auth.registerUser(dataRegister.value)
}
</script>
