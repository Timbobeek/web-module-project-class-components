// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

// const TodoList = (props) => <p>{props.propsTodoList}</p>;

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  handleChanges = event => {
    this.setState({
      ...this.state,
      input: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddTask(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges} type='text' name='task' />
        <button>Add a task!</button>
      </form>
    )
  }
}

export default TodoForm;
