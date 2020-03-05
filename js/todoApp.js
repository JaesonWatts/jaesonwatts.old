var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos: ', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  }
};


// V4 req: todoList.addTodo should add objects *
// toList.changeTodo should change the todoText property *
// todoList.toggleCompleted should change the completed property *

// V5 Req: .displayTodos should show .todoText
// .displayTodos should tess you if .todos is empty
// .displayTodos should show .completed