// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

// const TodoList = (props) => <p>{props.propsTodoList}</p>;

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {/* <input onChange ={this.props.handleChange} /> */}
        <button>Add To Do</button> 
        {/* <button onClick = {this.handleTwo} >Clear Completed</button> */}
    </form>
    )
  }
}

export default TodoForm;
