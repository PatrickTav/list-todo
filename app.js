const formAddTodo = document.querySelector(".form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const todoItem = document.createElement("li");

formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.target.add.value.trim()
  console.log(inputValue)
  if (inputValue.length) {
    todoItem.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `;
  }

  todosContainer.insertAdjacentElement("beforeend", todoItem);
  event.target.reset();
});

todosContainer.addEventListener('click', event=>{
    const classOfItemList =Array.from(event.target.classList).includes('delete')
    if(classOfItemList){
         event.target.parentElement.remove()
        
    }
    
})
