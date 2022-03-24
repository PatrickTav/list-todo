const formAddTodo = document.querySelector(".form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const formSearch = document.querySelector(".form-search");
const emptyTodo = document.querySelector(".warning");



const WarningMessage = () => {
  Array.from(todosContainer.children).length
    ? emptyTodo.classList.add("hidden")
    : emptyTodo.classList.remove("hidden");
};



const addTodo = (inputValue) => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo ='${inputValue}'>
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash='${inputValue}'></i>
    </li>
    `;
  }
  event.target.reset();
  WarningMessage();
};

formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.target.add.value.trim();
  addTodo(inputValue);
});


const removeTodo = (clickedElement) => {
  const trashDataValue = clickedElement.dataset.trash;
  const todo = document.querySelector(
    `[data-todo="${clickedElement.dataset.trash}"]`
  );
  if (trashDataValue) {
    todo.remove();
    WarningMessage();
  }
};

todosContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  removeTodo(clickedElement);
});




const filterTodos = (todos, inputSearchValue, returnMatchedTodos) => {
  return todos.filter((todo) => {
    const matchedTodos = todo.textContent
      .toLowerCase()
      .includes(inputSearchValue);

    return returnMatchedTodos ? matchedTodos : !matchedTodos;
  });
};

const manipulateClasses = (todos, classToAdd, classToRemove) => {
  todos.forEach((todo) => {
    todo.classList.remove(classToRemove);
    todo.classList.add(classToAdd);
  });
};



const hideTodos = (todos, inputSearchValue) => {
  const todoTohide = filterTodos(todos, inputSearchValue, false);
  manipulateClasses(todoTohide, "hidden", "d-flex");
};
const showTodo = (todos, inputSearchValue) => {
  const todoToShow = filterTodos(todos, inputSearchValue, true);
  manipulateClasses(todoToShow, "d-flex", "hidden");
};



formSearch.addEventListener("input", (event) => {
  const inputSearchValue = event.target.value.trim();
  const todos = Array.from(todosContainer.children);

  hideTodos(todos, inputSearchValue);
  showTodo(todos, inputSearchValue);
});
