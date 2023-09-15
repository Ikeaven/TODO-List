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

function deleteTodo(id){
    todoList.value = todoList.value.filter(todo => todo.id !== id)
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
        <div class="todo_wrapper">
            <img @click="deleteTodo(todo.id)" src="../assets/img/trash-can-solid.svg" alt="trash icon" class="todo_trashIcon">
            <input type="checkbox" v-model="todo.completed" class="todo_checkbox">
            <input type="text" v-model="todo.title" :class="`${todo.completed ? 'completed': ''}`">
        </div>
    </div>

</template>

<style scoper lang="scss">
.completed{
    text-decoration: line-through;
}

.todo_wrapper{
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.todo_trashIcon{
    width: 15px;
    cursor: pointer;
}

.todo_checkbox{
    margin: 0 10px;
    cursor: pointer;
}
</style>