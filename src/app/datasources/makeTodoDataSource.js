export const makeToDoDataSource = () => {
  async function create(data) {
    console.log("[Data Source] To do created", data);
    return Promise.resolve(data);
  }

  return {
    create,
  };
};
