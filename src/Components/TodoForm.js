import React, { useState } from 'react';

function TodoForm({ addTodo, clearList,}) {
    const [value, setValue] = useState([]);
  
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue("");
    };

    return (
        <div class="field has-addons">
          <div class="control is-expanded">
            <form onSubmit={handleSubmit}>
              <input
                class = "input"
                type = "text"
                placeholder = "What do you want to do today?"
                value = {value}
                onChange = {e => setValue(e.target.value)}
              />
            </form>
          </div>
          <div class="control">
            <button type="submit" class="button is-success" onClick={handleSubmit}>Add</button>
            <button type="submit" class="button is-danger" onClick={clearList}>Clear List</button>
          </div>
        </div>
      );
    }    

export default TodoForm;