import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import Todo from './todo.js';

// const myList = document.querySelector('.todo-list');
const todoItem = document.getElementById('name');
const submitIcon = document.querySelector('#submit-icon');
const removeBtn = document.querySelector('#remove-all');

const todo = new Todo();

// const loadButtons = () => {
//   const btnsInfo = document.querySelectorAll('.article-info');
//   const btnsDelete = document.querySelectorAll('.article-btn');

//   btnsInfo.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       console.log('am also here');
//       // todo.complete(btn.getAttribute('id').slice(3));
//       loadButtons();
//     });
//   });

//   btnsDelete.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       todo.remove(btn.getAttribute('id').slice(3));

//       loadButtons();
//     });
//   });
// };

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
