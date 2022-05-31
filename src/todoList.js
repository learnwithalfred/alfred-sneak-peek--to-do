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

  removeTodo(id) {
    const todo = document.getElementById(id);
    todo.remove();
    this.data = this.data.filter((todo) => todo.id !== id);
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
