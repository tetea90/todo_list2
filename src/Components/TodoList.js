import React, {useState} from 'react';

function TodoList({ todo, index, completeTodo, removeTodo}) {
    return (
      <div className="todo"> 
        <Checkbox />    
            <div style={{textDecoration: Checkbox.checked ? "line-through" : "" }} >
                {todo.text}
            </div>
        <div>
          <button class = "button" onClick={() => removeTodo(index)}>Delete Task</button>
        </div>
      </div>
    );
  }

  function Checkbox() {
    const [checked, setChecked] = useState(false);
  
    return (
      <label>
        <input type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
    );
  }

export default TodoList;
