import Todo from './todoClass';
import { todoData } from './todoList';

export const displayTodo = (todo) => {
  const ul = document.querySelector('.todo-list');
  ul.classList.add('list-group-item');
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  ul.appendChild(li);
  li.setAttribute('id', todo.id);

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('form-check');
  todoDiv.classList.add('todoDiv');
  todoDiv.setAttribute('id', todo.id);
  li.appendChild(todoDiv);

  const checkedInput = document.createElement('input');
  checkedInput.classList.add('form-check-input');
  checkedInput.setAttribute('type', 'checkbox'); //set id dynamically
  checkedInput.setAttribute('id', 'checkbox');

  todoDiv.appendChild(checkedInput);
  const textLabel = document.createElement('label');
  textLabel.classList.add('form-check-label');
  checkedInput.setAttribute('for', 'checkbox');

  todoDiv.appendChild(textLabel);
  textLabel.innerText = `${todo.name}`;

  const elapseIcon = document.createElement('i');
  elapseIcon.classList.add('fa');
  elapseIcon.classList.add('fa-ellipsis-v');

  todoDiv.appendChild(elapseIcon);


  todoDiv.addEventListener('click', () => {
    todoData.removeTodo(todoDiv.id);
      const checked = todoDiv.childNodes[0].value;
      const value = todoDiv.childNodes[1].innerText;
      console.log(todoDiv.parentNode);
  });
};

export const createBook = (name) => {
  if (name) {
    return new Todo(name);
  }
  return;
};

const removeAll = document.querySelector('#remove-all');

removeAll.addEventListener('click', () => todoData.removeAll());
