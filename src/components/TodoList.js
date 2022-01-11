import React from 'react';
import Todo from './Todo';

// const TodoList = props => {
//   return(
//     <div className ='task-list'>
//       {props.theList.map(task =>(
//         <Todo handleToggleTask={props.handleToggleTask} key={task.id} task={task}/>
//       ))}
//     </div>
//   )
// }

class TodoList extends React.Component{
  render(){
    return(
          <div className ='task-list'>
            {this.props.theList.map(task =>(
              <Todo handleToggleTask={this.props.handleToggleTask} key={task.id} task={task}/>
            ))}
          </div>
        )
  }
}


export default TodoList;