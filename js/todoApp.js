var todos = []

// it should have a function to display the todos.
function displayTodos() {
    console.log(todos);
}

// it should have a function to add todos.
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

// it should have a function to change todos.
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

// it should have a function to delete todos.
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}