// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

// const TodoList = (props) => <p>{props.propsTodoList}</p>;

class TodoList extends React.Component {
  render() {
    // console.log(this.props.todoList)
    return <div>
      {this.props.todoList.map(item => <Todo key={item.id} item={item}/>)}
    </div>
  }
}

export default TodoList;