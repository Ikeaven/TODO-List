<script setup>
import { ref, onBeforeMount } from 'vue'

const todo = ref('')
const todoList = ref([])

function addTodo() {
    if(todo.value.trim() === ''){
        return
    }
    todoList.value.push(todo.value)
    todo.value = ''
}

</script>

<template>
    <form @submit.prevent="addTodo">
        <input type="text" v-model="todo" placeholder="Add a new todo">
        <button type="submit">Add</button>
    </form>
</template>

<style scoped>

</style>