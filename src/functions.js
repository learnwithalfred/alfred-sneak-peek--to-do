import Todo from './todoClass';
import { todoData } from './todoList';

export const displayTodo = (todo) => {
  const ul = document.querySelector('.todo-list');
  ul.classList.add('list-group-item');
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  ul.appendChild(li);

  // todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('form-check');
  todoDiv.classList.add('todoDiv');
  todoDiv.setAttribute('id', todo.index);
  li.appendChild(todoDiv);

  // container to space input and icon
  const todoInputContainer = document.createElement('div');
  todoInputContainer.classList.add('display-flex');
  todoDiv.appendChild(todoInputContainer);

  //checkedInput
  const checkedInput = document.createElement('input');
  checkedInput.classList.add('form-check-input');
  checkedInput.setAttribute('type', 'checkbox'); //set id dynamically
  checkedInput.setAttribute('id', 'checkbox');

  todoInputContainer.appendChild(checkedInput);

  // textLabel
  const textLabel = document.createElement('label');
  textLabel.classList.add('form-check-label');
  checkedInput.setAttribute('for', 'checkbox');
  textLabel.innerText = `${todo.description}`;

  todoInputContainer.appendChild(textLabel);

  const iconDiv = document.createElement('div');
  iconDiv.classList.add('icon-div');

  // icon
  const elapseIcon = document.createElement('i');
  elapseIcon.classList.add('fa');
  elapseIcon.classList.add('fa-ellipsis-v');

  todoDiv.appendChild(iconDiv);
  iconDiv.appendChild(elapseIcon);

  todoInputContainer.addEventListener('click', () => {
    // todoData.removeTodo(todoDiv.id);
    // const checked = todoDiv.childNodes[0].value;
    // const value = todoDiv.childNodes[1].innerText;
    // console.log(todoDiv.childNodes[1].classList);
    console.log(todoDiv.childNodes[1].childNodes[0]);

    todoDiv.childNodes[1].childNodes[0].classList.toggle(
      'fa-ellipsis-vertical'
    );
    todoDiv.childNodes[1].childNodes[0].classList.toggle('fa-trash');
  });

  const iconDivButton = document.querySelector('.icon-div');
  iconDivButton.addEventListener('click', (e) => {
    console.log('i was clicked', iconDivButton);
  });
  // iconDivButton.addEventListener('click', () => {
  //   console.log('i was clicked');
  // });
};

export const createBook = (description) => {
  if (description) {
    return new Todo(description);
  }
  return;
};

const removeAll = document.querySelector('#remove-all');

removeAll.addEventListener('click', () => todoData.removeAll());
