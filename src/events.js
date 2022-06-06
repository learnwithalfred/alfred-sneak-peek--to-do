const handleDisplay = (array) => {
  const taskList = document.querySelector('.todo-list');

  let textContent = '';

  if (array.length) {
    array.forEach((item) => {
      let showText = '';

      let showIcon = 'far fa-square icon icon-disabled';
      if (item.complete) {
        showIcon = 'fas fa-check icon icon-activated';
        showText = 'class="text-completed"';
      }
      textContent += `<li class="list-group-item">
          <div class="todoDiv" onmousedown="return false">
            <div class="display-flex toggleCompleteButton" id="${item.index}">
              <i id="icon${item.index}" class="${showIcon}"></i>
                <span id="title${item.index}" ${showText}>${item.description}</span>
            </div>

             <div id="delete${item.index}" class="deleteButton" title="Delete Task" onmousedown="return false" >
                <i class="fas fa-trash-alt icon"></i>
              </div>  
          </div>
        </li>
    `;
    });

    taskList.innerHTML = textContent;
  } else {
    taskList.innerHTML = '<li class="list-group-item">No todo found</li>';
  }
};

export default handleDisplay;
