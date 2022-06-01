import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import Todo from './todo';

const myList = document.querySelector('.todo-list');
const todoItem = document.getElementById('name');
const submitIcon = document.querySelector('#submit-icon');
const todo = new Todo(myList);

window.onload = () => todo.update();

todoItem.addEventListener('keyup', (e) => {
  if (e.key === 13 || e.key === 'Enter') {
    todo.add(todoItem.value);
    todoItem.value = '';
  }
});

submitIcon.addEventListener('click', () => {
  todo.add(todoItem.value);
  todoItem.value = '';
});
