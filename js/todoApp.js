var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!')
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if(this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )',this.todos[i].todoText);
        } 
      }
    } 
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
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    //get num of complete todo
    for (var i = 0; i < totalTodos; i++){
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // Case 1: if all true make all false
    if (completedTodos  === totalTodos) {
      // make all false
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      // Case 2: else make all true
      for (var = i; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};


// V4 req: todoList.addTodo should add objects *
// toList.changeTodo should change the todoText property *
// todoList.toggleCompleted should change the completed property *

// V5 Req: .displayTodos should show .todoText*
// .displayTodos should tess you if .todos is empty*
// .displayTodos should show .completed*

// V6 Req: .toggleAll: if everything is true make it all false*
// .toggleAll: otherwise make it all true*

