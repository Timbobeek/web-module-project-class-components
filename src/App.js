import React from 'react';
import ToDoList from './components/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: 'dhsjfhjdsfhjk'
    }; 
  }

  handleChangeFunction = (event) => {
    this.setState({tasks: event.target.value});
  };

  handleTwo = event => {
    this.setState({tasks: ''});
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <input onChange ={this.handleChangeFunction} />
        <p>{this.state.tasks}</p>
        <button>Add To Do</button> 
        <button onClick = {this.handleTwo} >Clear Completed</button>
      </div>
    );
  }
}

export default App;
