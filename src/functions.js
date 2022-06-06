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
      if (parseInt(index.replace(/[^0-9]/g, '')) !== item.index) return true;
      return null;
    });
    return selectedTask;
  }
  return array;
};

const handleClearCompleted = (array) => {
  const newTodoItems = array.filter((item) => {
    if (!item.complete) return true;
    return null;
  });
  return newTodoItems;
};

export { handleToggleComplete, handleDelete, handleClearCompleted };
