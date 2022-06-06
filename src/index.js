import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import Todo from './todo.js';

const todoItem = document.getElementById('name');
const submitIcon = document.querySelector('#submit-icon');
const removeBtn = document.querySelector('#remove-all');

const todo = new Todo();

window.onload = () => {
  todo.update();
};

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

removeBtn.addEventListener('click', () => {
  todo.clearCompleted();
});
