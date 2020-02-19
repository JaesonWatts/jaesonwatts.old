var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
      console.log('My todos: ', this.todos);
    },
    addTodo: function(todo) {
      this.todos.push(todo);
      this.displayTodos();
    },
    changeTodo: function(position, newValue) {
      this.todos[position] = newValue;
      this.displayTodos();
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    }
  };


// var todos = []

// // it should have a function to display the todos.
// function displayTodos() {
//     console.log(todos);
// }

// // it should have a function to add todos.
// function addTodo(todo) {
//     todos.push(todo);
//     displayTodos();
// }

// // it should have a function to change todos.
// function changeTodo(position, newValue) {
//     todos[position] = newValue;
//     displayTodos();
// }

// // it should have a function to delete todos.
// function deleteTodo(position) {
//     todos.splice(position, 1);
//     displayTodos();
// }