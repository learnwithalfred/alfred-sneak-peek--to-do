/* eslint-disable radix */
class Todo {
  constructor() {
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
  showData() {
    const taskList = document.querySelector('.todo-list');
    const task = this.data;
    let textContent = '';

    if (task.length) {
      task.forEach((item) => {
        textContent += `<li class="list-group-item">
          <div class="todoDiv" id="3">
            <div class="display-flex">
              <input
                class="form-check-input checkbox"
                type="checkbox"
                name="la"
                id="123456789"
              />
              <label for="123456789" id="76543">${item.description}</label>
            </div>
            <div class="icon-div">
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </div>
        </li>
    `;
      });

      taskList.innerHTML = textContent;
    } else {
      taskList.innerHTML = 'No data here';
    }
    return true;
  }

  clearCompleted() {
    this.data = this.data.filter((todo) => {
      if (!todo.complete) return true;
      return null;
    });
    this.update();
  }

  update() {
    // while (this.listElement.firstChild) {
    //   this.listElement.removeChild(this.listElement.firstChild);
    // }

    // this.data.forEach((todo) => {
    //   this.listElement.appendChild(Todo.#showData(todo));
    // });
    this.showData();
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
