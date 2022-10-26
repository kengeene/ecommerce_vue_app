import { makeToDoRepository } from "@/app/repositories/makeTodoRepository.js";
import { todoDataSource } from "@/app/datasources";

const todoRepository = makeToDoRepository({ todoDataSource });

export { todoRepository };