export default class Todo {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = Math.floor(Math.random() * 1000000);
  }
}
