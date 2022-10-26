export const makeToDoRepository = ({ todoDataSource }) => {
  async function createToDo(data) {
    console.log("[Repository] To do created");
    await todoDataSource.create(data);
  }

  return {
    createToDo,
  };
};
