export class TodoList {
  constructor() {
    this.data = [];
  }

  getLength() {
    return this.data.length;
  }

  addTodo(todo) {
    this.data.push(todo);
    localStorage.setItem('Todos', JSON.stringify(this.data));
  }

  removeTodo(index) {
    const todo = document.getElementById(index);
    todo.remove();
    this.data = this.data.filter((data) => data.index !== parseInt(index));
    localStorage.setItem('Todos', JSON.stringify(this.data));
  }

  removeAll() {
    localStorage.removeItem('Todos');
    window.location.reload();
  }

  toggleComplete(id) {
    const selectedTodo = document.getElementById(id);
    selectedTodo.classList.toggle('complete');
  }
}

export const todoData = new TodoList();
