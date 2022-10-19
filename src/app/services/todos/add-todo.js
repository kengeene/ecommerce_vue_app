export const makeAddToDo = ({toDORepository }) => {
  return async function () {
    await toDORepository.create()
    console.log('test');
  };
};
