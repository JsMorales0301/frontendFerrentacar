<template>
    <header>
        <nav>
            <NavBar />
        </nav>
    </header>

    <section>
        <div class="w-auto p-12">
            <h1 class="text-6xl font-bold">The car is waiting for you</h1>
        </div>

        <div class="p-12">
            <div class="card bg-base-300 shadow-xl">
                <div class="card-body flex-row justify-between">
                    <input type="text" placeholder="Location" class="input input-bordered w-full" />
                    <input
                        type="date"
                        placeholder="Pick-up date"
                        class="input input-bordered w-full"
                    />
                    <input
                        type="date"
                        placeholder="Drop-off date"
                        class="input input-bordered w-full"
                    />
                    <button class="btn btn-primary gap-2">
                        Find a car
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                            <path d="M21 21l-6 -6"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="p-12">
        <h2 class="text-4xl font-bold text-center">Our fleet</h2>

        <div class="pt-8 flex justify-between gap-4">
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <img
                        src="https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/d64282b9-f766-4956-873f-5886ff78704b/dee4fe50-a57a-4d51-8384-47b3d86bfccc.png"
                        alt="Shoes"
                        class="rounded-xl"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-center">Mercedes Benz Cla 45 AMG</h2>

                    <div class="flex justify-between">
                        <div class="rating rating-sm">
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                                checked
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                        </div>

                        <span class="font-bold"> $ 9000 </span>
                    </div>

                    <div class="flex justify-center">
                        <div class="card-actions">
                            <button class="btn btn-primary btn-outline gap-2">
                                Rent a car
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-arrow-narrow-right"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M15 16l4 -4"></path>
                                    <path d="M15 8l4 4"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <img
                        src="https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/d64282b9-f766-4956-873f-5886ff78704b/dee4fe50-a57a-4d51-8384-47b3d86bfccc.png"
                        alt="Shoes"
                        class="rounded-xl"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-center">Mercedes Benz Cla 45 AMG</h2>

                    <div class="flex justify-between">
                        <div class="rating rating-sm">
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                                checked
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                        </div>

                        <span class="font-bold"> $ 9000 </span>
                    </div>

                    <div class="flex justify-center">
                        <div class="card-actions">
                            <button class="btn btn-primary btn-outline gap-2">
                                Rent a car
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-arrow-narrow-right"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M15 16l4 -4"></path>
                                    <path d="M15 8l4 4"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <img
                        src="https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/d64282b9-f766-4956-873f-5886ff78704b/dee4fe50-a57a-4d51-8384-47b3d86bfccc.png"
                        alt="Shoes"
                        class="rounded-xl"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-center">Mercedes Benz Cla 45 AMG</h2>

                    <div class="flex justify-between">
                        <div class="rating rating-sm">
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                                checked
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                class="mask mask-star-2 bg-primary"
                            />
                        </div>

                        <span class="font-bold"> $ 9000 </span>
                    </div>

                    <div class="flex justify-center">
                        <div class="card-actions">
                            <button class="btn btn-primary btn-outline gap-2">
                                Rent a car
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-arrow-narrow-right"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M15 16l4 -4"></path>
                                    <path d="M15 8l4 4"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
</script>

<style scoped></style>
