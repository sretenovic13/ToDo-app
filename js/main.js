const todoForm = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-input')
const todoItemsList = document.querySelector('.todo-items')

let todos = []

todoForm.addEventListener('submit',function(event){
    event.preventDefault()
    addTodo(todoInput.value)
})

const addTodo = item => {
    if(item !== ''){
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        }

        todos.push(todo)
        addToLocalStorage(todos)
        todoInput.value = ('')
    }
}

const renderTodos = toosArray => {
    todoItemsList.innerHTML = ''
    todosArray.map(elementNiza => {
        const checked = elementNiza.completed ? 'checked' : null

        const li = document.createElement("li")
        li.setAttribute("class","item")
        li.setAttribute("date-key",elementNiza.id)

        if(elementNiza.completed === true){
            li.classList.add('checked')
        }

        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${checked}>
            ${elementNiza.name}
            <button class="delete-button">X</button>
        `
        todoItemsList.append(li)
    })
}
