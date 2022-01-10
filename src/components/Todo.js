// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const Todo = (props) => {
  const handleClick = () => {
    props.handleToggleTask(props.task);
  }

  return(
    <div onClick={handleClick} className={`task${props.task.completed ? ' completed' : ''}`}>
      <p>{props.task.task}</p>
    </div>
  )
}


export default Todo;