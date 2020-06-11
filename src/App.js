import React, {useEffect, useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import 'bulma/css/bulma.css';

const LOCAL_STORAGE_KEY = "todo-list"

function App() {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const toggleComplete = index => {
    setTodos(
      todos.map(todo => {
        if(todo.index === index) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      }))
  };

  const editTodo = (text, index) => {
    setTodos(
      todos.map(todo => {
        if(todo.index === index){
          return {...todo, text}
        };
        return todo;
      }))
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const clearList = () => {
    setTodos([]);
  }

  return (
    <div className="App">
      <div className="todo-list">
        <h3 class="title is-3" style={{textAlign: "center"}}>To-do list</h3>
          <TodoForm addTodo={addTodo} clearList={clearList} />
            {todos.map((todo, index) => (
              <TodoList
                key = {index}
                index={index}
                todo = {todo}
                toggleComplete = {toggleComplete}
                removeTodo = {removeTodo}
                editTodo = {editTodo}
              />
            ))}      
      </div>
    </div>
  );
}

export default App;