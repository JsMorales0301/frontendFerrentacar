<template>

    <div class="flex justify-center">

        
        <div class="card w-[48rem] bg-base-100 shadow-lg">
            
            <div class="tabs tab-box">
                <a class="tab tab-lg tab-lifted tab-active">Profile</a> 
                <a class="tab tab-lg tab-lifted">Change password</a> 
                <a class="tab tab-lg tab-lifted">Large</a>
            </div>

            <div class="card-body">
    
                <div class="grid grid-cols-7">
    
                    <div class="col-span-2">
                        <div class="avatar">
                            <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img :src="dataUser.urlFotoPerfil" />
                            </div>
                        </div>
                    </div>
    
                    <div class="col-span-5">
                        <h2 class="text-3xl mb-4">My Profile</h2>
    
                        <div class="grid grid-cols-6 gap-4">
    
                            <div class="col-span-3">
                                <div class="mb-2 form-control w-full">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="example@ferrentacar.com"
                                        class="input input-bordered w-full"
                                        :value="dataUser.nombre"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-span-3">
                                <div class="mb-2 form-control w-full">
                                    <label class="label">
                                        <span class="label-text">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="example@ferrentacar.com"
                                        class="input input-bordered w-full "
                                        :value="dataUser.apellido"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-span-3">
                                <div class="mb-2 form-control w-full">
                                    <label class="label">
                                        <span class="label-text">Birthdate</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="example@ferrentacar.com"
                                        class="input input-bordered w-full"
                                        :value="dataUser.fechaNacimiento"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-span-3">
                                <div class="mb-2 form-control w-full">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="example@ferrentacar.com"
                                        class="input input-bordered w-full "
                                        :value="dataUser.telefono"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-span-6">
                                <div class="mb-2 form-control w-full">
                                    <label class="label">
                                        <span class="label-text">Email address</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="example@ferrentacar.com"
                                        class="input input-bordered w-full"
                                        :value="dataUser.email"
                                        disabled
                                    />
                                </div>
                            </div>
    
                            <div class="mt-4 col-span-6">
                                <div class="flex justify-center">
                                    <div class="btn-group btn-group-vertical lg:btn-group-horizontal">
                                        <button class="btn btn-error">Disable Account</button>
                                        <button class="btn btn-active">Edit</button>
                                        <button class="btn btn-success btn-disabled">Confirm Changes</button>
                                    </div>
                                </div>
                            </div>
    
                            
                        </div>
    
                    </div>
    
                </div>
    
    
            </div>
    
        </div>
    </div>


</template>

<script setup lang="ts">
const dataLocalStorage = localStorage.getItem('dataUser')
const dataUser = JSON.parse(dataLocalStorage!)

</script>

<style scoped></style>
