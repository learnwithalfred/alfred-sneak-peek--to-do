/* eslint-disable radix */
import {
  handleDelete,
  handleToggleComplete,
  handleClearCompleted,
} from './functions.js';

import handleDisplay from './events.js';

class Todo {
  constructor() {
    return null;
  }

  static get() {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    if (todoList) {
      return todoList;
    }
    return [];
  }

  static set(todoItem) {
    localStorage.setItem('todoList', JSON.stringify(todoItem));
  }

  static refreshId(todoArr) {
    for (let i = 0; i < todoArr.length; i += 1) todoArr[i].index = i;
    return todoArr;
  }

  add(text) {
    if (text) {
      const taskMem = this.constructor.get();
      const newTodo = {
        description: text,
        completed: false,
        index: taskMem.length,
      };
      taskMem.push(newTodo);

      this.constructor.set(taskMem);
      return this.update();
    }
    return false;
  }

  remove(index) {
    const todoList = this.constructor.get();
    const selectedTask = handleDelete(index, todoList);
    this.constructor.set(this.constructor.refreshId(selectedTask));
    this.update();
  }

  toggleComplete(index) {
    const todoList = this.constructor.get();
    const newTodoItem = handleToggleComplete(index, todoList);
    this.constructor.set(newTodoItem);
    this.update();
  }

  clearCompleted() {
    const todoList = this.constructor.get();
    const newTodoItems = handleClearCompleted(todoList);
    this.constructor.set(this.constructor.refreshId(newTodoItems));
    this.update();
  }

  update() {
    const task = this.constructor.get();
    handleDisplay(task);
    const toggleCompleteButton = document.querySelectorAll(
      '.toggleCompleteButton',
    );
    const deleteButton = document.querySelectorAll('.deleteButton');

    deleteButton.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.remove(btn.getAttribute('id'));
      });
    });

    toggleCompleteButton.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.toggleComplete(btn.getAttribute('id'));
      });
    });
    return true;
  }
}

export default Todo;
