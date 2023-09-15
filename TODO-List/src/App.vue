<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Todo list</RouterLink>
            <RouterLink to="/pourcentage">Completion</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style lang="scss">
@use './assets/SCSS/base';
@use './assets/SCSS/variables' as v;

header {
    background-color: v.$primaryColor-Light;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    nav {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        a {
            color: v.$primaryColor;
            font-size: 1.5rem;
            font-weight: 700;
            text-decoration: none;
            margin-right: 20px;
        }
    }
}

.router-link-active {
    color: v.$thirdColor;
}
</style>
