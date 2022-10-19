<template>
  <div class="about">
    <button @click="addToDo()">{{btnTitle}}</button>
  </div>
</template>
<script>
import { addToDoService } from '@/app/services/index';
export default {
  name: 'AddTodo',
  data: () => {
    return {
      btnTitle: 'Add Todo',
    }
  },
  methods: {
    addToDo() {
      addToDoService();
    },
  },
};
</script>
