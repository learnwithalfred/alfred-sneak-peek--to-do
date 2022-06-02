/* eslint-disable radix */
import { handleDelete, handleToggleComplete } from './functions.js';

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
    // console.log(newTodoItem, 'home');
    this.constructor.set(newTodoItem);
    this.update();
  }

  clearCompleted() {
    const todoList = this.constructor.get();

    const newTodoItems = todoList.filter((item) => {
      if (!item.complete) return true;
      return null;
    });

    this.constructor.set(this.constructor.refreshId(newTodoItems));
    this.update();
  }

  update() {
    const taskList = document.querySelector('.todo-list');
    const task = this.constructor.get();
    let textContent = '';

    if (task.length) {
      task.forEach((item) => {
        let showText = '';

        let showIcon = 'far fa-square icon icon-disabled';
        if (item.complete) {
          showIcon = 'fas fa-check icon icon-activated';
          showText = 'class="text-completed"';
        }
        textContent += `<li class="list-group-item">
          <div class="todoDiv" onmousedown="return false">
            <div class="display-flex toggleCompleteButton" id="${item.index}">
              <i id="icon${item.index}" class="${showIcon}"></i>
                <span id="title${item.index}" ${showText}>${item.description}</span>
            </div>

             <div id="${item.index}" class="deleteButton" title="Delete Task" onmousedown="return false" >
                <i class="fas fa-trash-alt icon"></i>
              </div>  
          </div>
        </li>
    `;
      });

      taskList.innerHTML = textContent;
    } else {
      taskList.innerHTML = '<li class="list-group-item">No todo found</li>';
    }

    const deleteButton = document.querySelectorAll('.deleteButton');
    const toggleCompleteButton = document.querySelectorAll(
      '.toggleCompleteButton'
    );

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
