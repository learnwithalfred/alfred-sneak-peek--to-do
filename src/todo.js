/* eslint-disable radix */
class Todo {
  constructor() {
    this.data = [

    ];
  }

  toggleComplete(index) {
    for (let i = 0; i < this.data.length; i += 1) {
      if (this.data[i].index === parseInt(index)) {
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

  clearCompleted() {
    this.data = this.data.filter((todo) => {
      if (!todo.complete) return true;
      return null;
    });
    this.update();
  }

  update() {
    const taskList = document.querySelector('.todo-list');
    const task = this.data;
    let textContent = '';

    if (task.length) {
      task.forEach((item) => {
        let showText = '';

        let showIcon = 'far fa-square icon icon-disabled';
        if (item.complete) {
          showIcon = 'fas fa-check icon icon-activated';
          showText = 'class="text-completed"';
        }
        textContent += `<li class="list-group-item">
          <div class="todoDiv" onmousedown="return false">
            <div class="display-flex article-info" id="${item.index}">
              <i id="icon${item.index}" class="${showIcon}"></i>
                <span id="title${item.index}" ${showText}>${item.description}</span>
            </div>

             <div id="${item.index}" class="article-btn" title="Delete Task" onmousedown="return false" >
                <i class="fas fa-trash-alt icon"></i>
              </div>  
          </div>
        </li>
    `;
      });

      taskList.innerHTML = textContent;
    } else {
      taskList.innerHTML = 'No data here';
    }

    const btnsDelete = document.querySelectorAll('.article-btn');
    const btnsInfo = document.querySelectorAll('.article-info');

    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.remove(btn.getAttribute('id'));
      });
    });

    btnsInfo.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.toggleComplete(btn.getAttribute('id'));
      });
    });

    return true;
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
    this.data = this.data.filter((item) => {
      if (Number(index) !== item.index) return true;
      return null;
    });
    // for (let i = 0; i < this.data.length; i += 1) {
    //   if (this.data[i].index === parseInt(index)) {
    //     this.data = this.data.filter((todo) => todo.index !== index);
    //     this.update();
    //   }
    // }
    this.update();
  }
}

export default Todo;
