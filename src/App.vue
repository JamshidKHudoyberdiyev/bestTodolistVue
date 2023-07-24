<script setup>
import { RouterView } from 'vue-router'
import TodoHeader from './components/TodoHeader.vue';
import Todos from './views/Todos.vue'

</script>

<template>
  <TodoHeader />
  <RouterView />
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 0 20px; */
}
</style>
