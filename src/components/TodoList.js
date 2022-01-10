// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return(
    <div className ='task-list'>
      {props.theList.map(task =>(
        <Todo handleToggleTask={props.handleToggleTask} key={task.id} task={task}/>
      ))}
    </div>
  )
}


export default TodoList;