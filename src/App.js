import React, { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import 'bulma/css/bulma.css';

function App() {
  
  const [todos, setTodos] = useState([
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <div className="todo-list">
        <h3 class="title is-3" style={{textAlign: "center"}}>To-do list</h3>
          <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
              <TodoList
                key = {index}
                index = {index}
                todo = {todo}
                completeTodo = {completeTodo}
                removeTodo = {removeTodo}
              />
            ))}      
      </div>
    </div>
  );
}

export default App;