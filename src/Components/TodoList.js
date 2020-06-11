import React from 'react';

function TodoList({ todo, index, toggleComplete, removeTodo, editTodo}) {
  
  function Checkbox() {
    toggleComplete(todo.index);
  }

  return (
    <div className="todo"> 
        <input type = "checkbox" onClick={Checkbox}/> 
          <div> 
              {todo.text}
          </div>
      <div>
        <button class = "button" onClick={() => editTodo(todo.text, todo.index)}>Edit Task</button>
        <button class = "button" onClick={() => removeTodo(index)}>Delete Task</button>
      </div>

    </div>
  );
}

export default TodoList;
