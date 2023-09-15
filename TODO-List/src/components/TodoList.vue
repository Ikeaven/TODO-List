<script setup>
import { ref, onBeforeMount, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const todo = ref('')
const todoList = ref([])

function addTodo() {
    if(todo.value.trim() === ''){
        return
    }
    todoList.value.push({
        id : uuidv4(),
        title : todo.value,
        completed : false
    })
    todo.value = ''
}

onBeforeMount(() => {
    const todos = localStorage.getItem('todoList') || []
    if(todos.length > 0){
        todoList.value = JSON.parse(todos)
    }
})

watch(todoList, (newValue) =>{
    localStorage.setItem('todoList', JSON.stringify(newValue))
}, { deep : true })

</script>

<template>
    <form @submit.prevent="addTodo">
        <input type="text" v-model="todo" placeholder="Add a new todo">
        <button type="submit">Add</button>
    </form>

    <div v-for="todo in todoList" >
        <input type="checkbox" v-model="todo.completed">
        <input type="text" v-model="todo.title" :class="`${todo.completed ? 'completed': ''}`">
    </div>

</template>

<style lang="scss">
.completed{
    text-decoration: line-through;
}


</style>