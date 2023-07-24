<script setup>
import { ref, defineEmits, reactive } from 'vue'
import TodoButton from './TodoButton.vue';
const emit = defineEmits(["create-todo"])
// const todo = ref('')

const todoState = reactive({
    todo: '',
    invalid: null,
    errMsg: '',
})


const createTod = () => {
    todoState.invalid = null
    if (todoState.todo !== '') {
        emit('create-todo', todoState.todo)
        todoState.todo = ''
        return
    }

    todoState.invalid = true
    todoState.errMsg = "Todo value cannot be empty"


}

</script>
<template>
    <div class="container">
        <div class="input-wrap" :class="{ 'input-er': todoState.invalid }">
            <input type="text" v-model="todoState.todo">
            <!-- <button @click="createTod">create</button> -->
            <TodoButton @click="createTod" />
        </div>
        <p v-show="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>

    </div>
</template>



<style lang="scss" scoped>
.container {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* gap: 20px; */

    .input-wrap {
        display: flex;
        border: 2px solid black;
        height: 40px;
        width: 400px;
        border-radius: 4px;
        border-color: rgb(10, 211, 211);
        padding-left: 10px;
        box-sizing: border-box;

        @media only screen and (max-width:768px) {
            width: 300px;
            height: 30px;
        }


        input {
            width: 80%;
            height: 100%;
            outline: none;
            border: none;
            font-size: 18px;
        }



    }

    .input-er {
        border-color: red;
    }

    .err-msg {
        font-size: 16px;
        color: red;
    }
}

@media only screen and (max-width:768px) {
    .container {
        margin-top: 10px;
    }
}


/* media */
</style>