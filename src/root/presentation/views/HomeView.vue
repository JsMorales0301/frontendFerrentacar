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
        <h2 class="text-4xl font-bold text-center">Our Fleet</h2>

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

    <section class="p-12">
        <h2 class="text-4xl font-bold text-center">Recommended Locations</h2>

        <div class="mt-12 grid grid-cols-12 gap-4">
            <div class="col-span-6">
                <a
                    href="#"
                    class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                >
                    <div class="absolute inset-0 bg-black/25"></div>

                    <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                            <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                            <p class="text-sm">Italy</p>
                        </div>

                        <span
                            class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                        >
                            4.5

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 text-yellow-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        </span>
                    </div>
                </a>
            </div>

            <div class="col-span-6">
                <a
                    href="#"
                    class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                >
                    <div class="absolute inset-0 bg-black/25"></div>

                    <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                            <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                            <p class="text-sm">Italy</p>
                        </div>

                        <span
                            class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                        >
                            4.5

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 text-yellow-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        </span>
                    </div>
                </a>
            </div>

            <div class="col-span-4">
                <a
                    href="#"
                    class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                >
                    <div class="absolute inset-0 bg-black/25"></div>

                    <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                            <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                            <p class="text-sm">Italy</p>
                        </div>

                        <span
                            class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                        >
                            4.5

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 text-yellow-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        </span>
                    </div>
                </a>
            </div>
            <div class="col-span-4">
                <a
                    href="#"
                    class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                >
                    <div class="absolute inset-0 bg-black/25"></div>

                    <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                            <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                            <p class="text-sm">Italy</p>
                        </div>

                        <span
                            class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                        >
                            4.5

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 text-yellow-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        </span>
                    </div>
                </a>
            </div>
            <div class="col-span-4">
                <a
                    href="#"
                    class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                >
                    <div class="absolute inset-0 bg-black/25"></div>

                    <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                            <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                            <p class="text-sm">Italy</p>
                        </div>

                        <span
                            class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                        >
                            4.5

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 text-yellow-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section class="p-12">
        <h2 class="text-4xl font-bold text-center">Customer Reviews</h2>

        <div class="mt-12 grid grid-cols-12 gap-4">
            <div class="col-span-4">
                <a
                    href="#"
                    class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                    <span
                        class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div class="sm:flex sm:justify-between sm:gap-4">
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                Building a SaaS product as a software developer
                            </h3>

                            <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                        <div class="hidden sm:block sm:shrink-0">
                            <img
                                alt="Paul Clapton"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                class="h-16 w-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <div class="mt-4">
                        <p class="max-w-[40ch] text-sm text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                            provident a, ipsa maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl class="mt-6 flex gap-4 sm:gap-6">
                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-gray-600">Published</dt>
                            <dd class="text-xs text-gray-500">31st June, 2021</dd>
                        </div>

                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
                            <dd class="text-xs text-gray-500">3 minute</dd>
                        </div>
                    </dl>
                </a>
            </div>
            <div class="col-span-4">
                <a
                    href="#"
                    class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                    <span
                        class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div class="sm:flex sm:justify-between sm:gap-4">
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                Building a SaaS product as a software developer
                            </h3>

                            <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                        <div class="hidden sm:block sm:shrink-0">
                            <img
                                alt="Paul Clapton"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                class="h-16 w-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <div class="mt-4">
                        <p class="max-w-[40ch] text-sm text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                            provident a, ipsa maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl class="mt-6 flex gap-4 sm:gap-6">
                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-gray-600">Published</dt>
                            <dd class="text-xs text-gray-500">31st June, 2021</dd>
                        </div>

                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
                            <dd class="text-xs text-gray-500">3 minute</dd>
                        </div>
                    </dl>
                </a>
            </div>
            <div class="col-span-4">
                <a
                    href="#"
                    class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                    <span
                        class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div class="sm:flex sm:justify-between sm:gap-4">
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                Building a SaaS product as a software developer
                            </h3>

                            <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                        <div class="hidden sm:block sm:shrink-0">
                            <img
                                alt="Paul Clapton"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                class="h-16 w-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <div class="mt-4">
                        <p class="max-w-[40ch] text-sm text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                            provident a, ipsa maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl class="mt-6 flex gap-4 sm:gap-6">
                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-gray-600">Published</dt>
                            <dd class="text-xs text-gray-500">31st June, 2021</dd>
                        </div>

                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
                            <dd class="text-xs text-gray-500">3 minute</dd>
                        </div>
                    </dl>
                </a>
            </div>
        </div>
    </section>

    <footer>
        <footer class="footer footer-center p-10 bg-primary text-primary-content">
            <div>
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    class="inline-block fill-current"
                >
                    <path
                        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
                    ></path>
                </svg>
                <p class="font-bold">FerRentaCar. <br />Providing reliable tech since 1992</p>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    </footer>
</template>

<script setup lang="ts">
import AlertSuccess from '@/shared/presentation/components/AlertSuccess.vue'
import NavBar from '../components/NavBar.vue'
import AlertError from '@/shared/presentation/components/AlertError.vue';
</script>

<style scoped></style>
