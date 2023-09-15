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
    <div class="todolist_wrapper">
        <form @submit.prevent="addTodo">
            <input type="text" v-model="todo" placeholder="Add a new todo">
            <button type="submit">Add</button>
        </form>
    
        
        <div v-for="todo in todoList" class="todo_wrapper">
            <img @click="deleteTodo(todo.id)" src="../assets/img/trash-can-solid.svg" alt="trash icon" class="todo_trashIcon">
            <input type="checkbox" v-model="todo.completed" class="todo_checkbox">
            <input type="text" v-model="todo.title" :class="`todo_title ${todo.completed ? 'completed': ''}`">
        </div>
    </div>
</template>

<style scoper lang="scss">

@use '../assets/SCSS/variables' as v;



.todolist_wrapper{
    width: 100%;
}

form{

    padding-left: 20px;
    display: flex;
    align-items: center;
    margin: 20px 0;
    input{
        padding: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: v.$primaryColor-Light;
        box-shadow: none;
        color: v.$primaryColor;
        font-size: 1.2rem;
    }
    input:focus{
        outline: none;
    }
    button{
        margin-left: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: v.$primaryColor-Light;
        box-shadow: none;
        color: v.$primaryColor;
        font-size: 1.2rem;
        padding: 10px;
        cursor: pointer;
    }

}

.todo_wrapper{
    display: flex;
    align-items: center;
    // justify-content: center;
    margin: 10px 0;
    padding-left: 20px;
    width: 100%;

}

.todo_title{
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: transparent;
    box-shadow: none;
    color: v.$primaryColor-Light;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    white-space: normal;
    width: 100%;
}

.completed{
    text-decoration: line-through v.$dangerColor 3px;
}

.todo_trashIcon{
    width: 15px;
    cursor: pointer;
}

.todo_checkbox{
    margin: 0 10px;
    cursor: pointer;
    accent-color: v.$primaryColor-Light;
}

</style>