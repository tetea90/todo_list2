import React from 'react';

function TodoList({ todo, index, toggleComplete, removeTodo}) {
  
  function Checkbox() {
    toggleComplete(todo.index);
  }

  return (
    <div className="todo"> 
        <input type = "checkbox" onClick={Checkbox}/> 
          <div style={{textDecoration: todo.completed ? "line-through" : "" }} > 
              {todo.text}
          </div>
      <div>
        <button class = "button" onClick={() => removeTodo(index)}>Delete Task</button>
      </div>
    </div>
  );
}

export default TodoList;
