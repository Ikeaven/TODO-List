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

<style scoped lang="scss">

</style>
