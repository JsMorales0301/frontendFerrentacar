<template>
    <form>
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

        <button class="my-4 btn btn-primary btn-block">Login</button>
        <div class="flex justify-center">
            <RouterLink class="link link-primary link-hover text-base" :to="{ name: '' }"
                >Forgot password</RouterLink
            >
        </div>
    </form>
</template>
