<template>
    <form class="grid grid-cols-12 gap-2">
        <div class="col-span-12">
            <div class="mb-4 form-control">
                <label class="label">
                    <span class="label-text">Your Name</span>
                </label>
                <div class="input-group">
                    <input
                        type="text"
                        placeholder="First Name"
                        class="input input-bordered w-full"
                    />
                    <input
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
                    type="number"
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
                <input type="file" class="file-input file-input-bordered w-full" />
            </div>
        </div>

        <div class="col-span-12 mb-4">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="**********"
                    class="input input-bordered w-full"
                />
            </div>
        </div>

        <div class="col-span-12 mt-4">
            <button class="btn btn-primary btn-block">Create Account</button>
        </div>
    </form>
</template>
