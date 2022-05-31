import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { todoData } from './todoList';
import { displayTodo, createBook } from './functions';
const name = document.querySelector('#name');
import initialData from './data';
window.onload = () => {
  todoData.data = JSON.parse(localStorage.getItem('Todos' || '[]'));

  if (todoData.data === null) {
    todoData.data = initialData;
  }


  // document.querySelector('.todoLength').innerText = todoData.getLength();
  todoData.data.forEach((todo) => displayTodo(todo));
};

name.addEventListener('keyup', (e) => {
  if (name.value) {
    if (e.key === 13 || e.key === 'Enter') {
      const newTodo = createBook(name.value);
      todoData.addTodo(newTodo);
      displayTodo(newTodo);
      name.value = ''; // set the input field to be null after saving its
    }
  }
  return false;
});
