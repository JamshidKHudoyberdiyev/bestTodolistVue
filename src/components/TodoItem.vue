<script setup>
import { defineProps } from 'vue'
import { Icon } from '@iconify/vue';
const props = defineProps({
    todo: {
        typeof: Object
    },
    index: {
        typeof: Number,
        requred: true
    }

})

defineEmits(['toggle-completed', 'toggle-edit', 'update-todo', 'delete-todo'])

</script>

<template>
    <li>
        <input type="checkbox" class="checkbox" @input="$emit('toggle-completed', index)" :checked="todo.isCompleted">
        <div class="todo">
            <input type="text" @input="$emit('update-todo', $event.target.value, index)" v-if="todo.isEditing"
                :value="todo.todo">
            <span :class="{ 'completed': todo.isCompleted }" v-else>{{ todo.todo }}</span>
        </div>
        <div class="todo-actions">
            <Icon class="icon" @click="$emit('toggle-edit', index)" v-if="todo.isEditing" icon="icons8:checked"
                color="#418b08" width="22" />
            <Icon class="icon" @click="$emit('toggle-edit', index)" v-else icon="material-symbols:edit" color="#418b08"
                width="22" />
            <Icon class="icon" @click="$emit('delete-todo', todo.id)" icon="material-symbols:delete" color="red"
                width="22" />
        </div>
    </li>
</template>



<style lang="scss" scoped>
li {
    background-color: rgb(234, 228, 228);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    margin-top: 10px;

    .checkbox {
        width: 25px;
        height: 25px;
        background-color: white;
        border-radius: 50%;
        border: 2px solid #ddd;
        appearance: none;
        outline: none;
        cursor: pointer;
    }

    .checkbox:checked {
        background-color: rgb(5, 222, 34);
    }

    .todo {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        width: 220px;

        input {
            outline: none;
            border-color: rgb(10, 211, 211);
            width: 100%;
            padding: 5px 0;

        }

    }

    .todo-actions {
        display: flex;
        align-items: center;
        gap: 8px;

        .icon {
            cursor: pointer;
        }
    }

    .completed {
        text-decoration: line-through;
    }
}

@media only screen and (max-width:768px) {
    li {
        padding: 10px 5px;
        gap: 5px;
        margin-top: 5px;

        .checkbox {
            width: 20px;
            height: 20px;
        }
    }

    .todo {
        row-gap: 3px;
        width: 200px;
    }

    .todo-actions {
        gap: 5px;
    }
}
</style>