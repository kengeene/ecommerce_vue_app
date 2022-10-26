export const makeAddToDo = ({ todoRepository }) => {
  return async function () {
      let todo = {};
      await todoRepository.createToDo(todo);
  };
};
