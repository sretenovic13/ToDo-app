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
    }
}