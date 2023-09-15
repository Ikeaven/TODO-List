<script setup>
import { ref, onBeforeMount, computed } from 'vue'

const todoList = ref([])

const completed = computed(() => {
    let completed = 0
    todoList.value.forEach(todo => {
        if (todo.completed) {
            completed++
        }
    })
    return completed
})


const percentages = computed(() => {
    let completed = 0
    todoList.value.forEach(todo => {
        if (todo.completed) {
            completed++
        }
    })
    return Math.round((completed / todoList.value.length) * 100)
})

onBeforeMount(() => {
    const todos = localStorage.getItem('todoList') || []
    if (todos.length > 0) {
        todoList.value = JSON.parse(todos)
    }
})

</script>

<template>
    <div class="completion_wrapper">

        <h1>Completion</h1>

        <p>You have completed {{ percentages }} % of your tasks : {{ completed }} / {{ todoList.length }} ! </p>
    </div>
</template>

<style scoped lang="scss">
.completion_wrapper {
    margin-left: 20px;
}
</style>