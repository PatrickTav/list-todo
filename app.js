const formAddTodo = document.querySelector(".form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const formSearch = document.querySelector(".form-search");
const emptyTodo = document.querySelector(".warning");

const WarningMessage = () => {
  Array.from(todosContainer.children).length
    ? emptyTodo.classList.add("hidden")
    : emptyTodo.classList.remove("hidden");
};

formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.target.add.value.trim();

  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
  }

  event.target.reset();
  WarningMessage();
});

todosContainer.addEventListener("click", (event) => {
  const classOfItemList = Array.from(event.target.classList).includes("delete");
  if (classOfItemList) {
    event.target.parentElement.remove();
  }
  WarningMessage();
});

formSearch.addEventListener("input", (event) => {
  const inputSearchValue = event.target.value.trim();
  Array.from(todosContainer.children)
    .filter(
      (todo) => !todo.textContent.toLowerCase().includes(inputSearchValue)
    )
    .forEach((todo) => {
      todo.classList.remove("d-flex");
      todo.classList.add("hidden");
    });
  Array.from(todosContainer.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(inputSearchValue))
    .forEach((todo) => {
      todo.classList.remove("hidden");
      todo.classList.add("d-flex");
    });
});
