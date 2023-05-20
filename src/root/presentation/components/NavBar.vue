<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
            </div>
            <RouterLink :to="{ name: 'home' }" class="btn btn-ghost normal-case text-xl">FerRentaCar</RouterLink>
        </div>
        <div class="navbar-center hidden lg:flex"></div>
        <div class="navbar-end gap-2">
            <RouterLink :to="{ name: 'login-user' }" class="btn btn-primary">Iniciar sesión</RouterLink>
            <a class="btn">Registro</a>
        </div>
    </div>
</template>
