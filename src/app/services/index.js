import { makeAddToDo } from '@/app/services/todos/add-todo';
import { todoRepository } from '@/app/repositories';
console.log(todoRepository);

const addToDoService = makeAddToDo({ todoRepository });

export { addToDoService };
