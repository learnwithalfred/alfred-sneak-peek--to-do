/* eslint-disable radix */
class Todo {
  constructor(HTMLelement) {
    this.listElement = HTMLelement;
    this.data = [
      { description: 'First  Todo  today', complete: false, index: 5467890 },
      { description: 'This is another todo', complete: false, index: 234 },
      {
        description: 'This is another xxxxxx todo',
        complete: true,
        index: 234,
      },
      {
        description: 'And am going to finish my todo here',
        complete: true,
        index: 867234,
      },
    ];
  }

  toggleComplete(index) {
    for (let i = 0; i < this.data.length; i += 1) {
      if (this.data[i].index === index) {
        this.data[i].complete = !this.data[i].complete;
        this.update();
      }
    }
  }

  getLength() {
    return this.data.length;
  }

  static #generateID() {
    return Math.floor(Math.random() * 1000000000);
  }

  // makes an new li tag
  static #createListItem(text) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('form-check');
    todoDiv.classList.add('todoDiv');
    todoDiv.setAttribute('id', text.index);
    li.appendChild(todoDiv);

    // container to space input and icon
    const todoInputContainer = document.createElement('div');
    todoInputContainer.classList.add('display-flex');
    todoDiv.appendChild(todoInputContainer);

    // checkedInput
    const checkedInput = document.createElement('input');
    checkedInput.classList.add('form-check-input');
    checkedInput.setAttribute('type', 'checkbox'); // set id dynamically
    checkedInput.className = 'checkbox';

    todoInputContainer.appendChild(checkedInput);

    // textLabel
    const textLabel = document.createElement('label');
    textLabel.classList.add('form-check-label');
    checkedInput.setAttribute('for', 'checkbox');
    checkedInput.setAttribute('id', text.index);
    textLabel.textContent = text.description;

    todoInputContainer.appendChild(textLabel);

    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon-div');
    iconDiv.setAttribute('id', text.index);

    const elapseIcon = document.createElement('i');
    elapseIcon.classList.add('fa');
    elapseIcon.classList.add('fa-ellipsis-v');
    iconDiv.classList.add('article-btn');

    todoDiv.appendChild(iconDiv);
    iconDiv.appendChild(elapseIcon);

    return li;
  }

  clearCompleted() {
    this.data = this.data.filter((todo) => {
      if (!todo.complete) return true;
      return null;
    });
    this.update();
  }

  update() {
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    this.data.forEach((todo) => {
      this.listElement.appendChild(Todo.#createListItem(todo));
    });
  }

  add(text) {
    if (text) {
      this.data.push({
        description: text,
        completed: false,
        index: Todo.#generateID(),
      });

      return this.update();
    }
    return false;
  }

  remove(index) {
    console.log('i was cliked', index, typeof index);
    for (let i = 0; i < this.data.length; i += 1) {
      if (this.data[i].index === parseInt(index)) {
        this.data = this.data.filter((todo) => todo.index !== index);
        this.update();
      }
    }
    return false;
  }
}

export default Todo;
