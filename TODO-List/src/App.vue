<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Todo list</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">

@use './assets/SCSS/base';
@use './assets/SCSS/variables' as v;

header{
  background-color: v.$primaryColor-Light;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
      color: v.$primaryColor;
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
    }
  }
}



</style>
