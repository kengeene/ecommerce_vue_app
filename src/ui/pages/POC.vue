<template>
  <div class="about">
    <h1>This is an poc page</h1>
    <AddTodo />
  </div>
</template>
<script>
import AddTodo from '@/ui/components/todos/AddTodo.vue';
export default {
  name: 'POC',
  data: () => {
    return {};
  },
  components: {
    AddTodo,
  },
};
</script>
