<script setup>
import { ref, watch, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid';
import { Icon } from '@iconify/vue';
import TodoCreate from '../components/TodoCreate.vue';
import TodoItem from '../components/TodoItem.vue';

const todoList = ref([])



watch(todoList, () => {
    setLocalStroge()
    // console.log("aa");
}, {
    deep: true
})

const todCompleted = computed(() => {
    return todoList.value.every(todo => todo.isCompleted == true)
})


const fetchTodo = () => {
    const data = JSON.parse(localStorage.getItem('todoList'))
    console.log(data._value);
    if (data) {
        todoList.value = data._value
    }

}



fetchTodo();

const setLocalStroge = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

const createTodo = (todo) => {
    todoList.value.push({
        id: uuidv4(),
        todo,
        isCompleted: null,
        isEditing: null,
    })

}





const toggleCompleted = (todoPos) => {
    todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted
    // setLocalStroge()
    // console.log(todoList.value[todoPos].isCompleted);
}

const toggleEdit = (todoPos) => {
    todoList.value[todoPos].isEditing = !todoList.value[todoPos].isEditing
    console.log(todoPos);
    // setLocalStroge()
}

const updateTodo = (value, todoPos) => {
    todoList.value[todoPos].todo = value
    // setLocalStroge()
}

const deleteTodo = (todoId) => {
    todoList.value = todoList.value.filter((todo) => todo.id !== todoId)
    // setLocalStroge()
}



</script>
<template>
    <div class="container">
        <div>
            <h1>Cretae Todos </h1>
            <TodoCreate @create-todo="createTodo" />
            <ul class="todo-list" v-if="todoList.length > 0">
                <TodoItem v-for="(todo, index)  in todoList" :todo="todo" :index="index" @toggle-completed="toggleCompleted"
                    @toggle-edit="toggleEdit" @update-todo="updateTodo" @delete-todo="deleteTodo" />
            </ul>
            <div class="todo-msg" v-else>
                <Icon icon="noto-v1:sad-but-relieved-face" />
                <p> Unfortunately, You currently have no task</p>
            </div>
            <div class="completed-msg" v-if="todCompleted && todoList.length > 0">
                <Icon icon="noto:partying-face" />
                <p> You have finished all</p>
            </div>
        </div>
    </div>
</template>




<style lang="scss" scoped>
h1 {
    text-align: center;
}

.container {
    padding-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    ul {
        padding-top: 10px;
        list-style: none;
    }

    .todo-msg {
        padding-top: 10px;
        display: flex;
        gap: 8px;
        align-items: center;
        font-weight: 800;
    }

    .completed-msg {
        text-align: center;
        display: flex;
        gap: 5px;
        font-weight: bold;
        justify-content: center;
        padding-top: 10px;
    }
}

@media screen and (max-width:576px) {

    .container,
    .todo-msg,
    .completed-msg {
        padding-top: 8px;
    }

    h1 {
        font-size: 22px;
    }

    p {
        text-align: center;
        font-size: 14px;
    }
}</style>