const formAddTodo = document.querySelector('.form-add-todo')
const todosContiner = document.querySelector('.todos-container')
const todoItem = document.createElement('li')
formAddTodo.addEventListener('submit', event=>{
    event.preventDefault()
    const inputValue = event.target.add.value
    todoItem.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `
    todosContiner.insertAdjacentElement('beforeend', todoItem)
    event.target.reset()
})