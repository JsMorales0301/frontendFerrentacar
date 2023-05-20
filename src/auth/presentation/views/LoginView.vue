<template>
    <div class="flex flex-col items-center gap-4">
        <div class="card w-96 bg-base-200 shadow-md">
            <div class="card-body">
                <h2 class="card-title text-center">Login</h2>

                <div class="mb-4">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email address</span>
                        </label>
                        <input
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
                            type="text"
                            placeholder="**********"
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                </div>

                <button class="mb-4 btn btn-primary">Login</button>
                <div class="flex justify-center">
                    <RouterLink class="link link-primary link-hover text-base" :to="{ name: '' }"
                        >Forgot password</RouterLink
                    >
                </div>
            </div>
        </div>

        <div class="card w-96 bg-base-200 shadow-md">
            <div class="card-body">
                <h2 class="card-title text-base">
                    New to FerRentaCar?
                    <RouterLink class="link link-hover text-base link-primary" :to="{ name: '' }"
                        >Create an account</RouterLink
                    >
                </h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>
