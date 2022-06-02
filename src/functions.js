/* eslint-disable radix */

const handleToggleComplete = (index, array) => {
  const selectedTodo = array.filter((item) => {
    if (Number(index) === item.index) {
      item.complete = !item.complete;
      return item;
    }
    return array;
  });
  return selectedTodo;
};

const handleDelete = (index, array) => {
  if (index) {
    const selectedTask = array.filter((item) => {
      if (Number(index) !== item.index) return true;
      return null;
    });
    return selectedTask;
  }
  return array;
};

export { handleToggleComplete, handleDelete };
