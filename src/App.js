import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }; 
  }

  // handleChangeFunction = (event) => {
  //   this.setState({tasks: event.target.value});
  // }

  handleSubmit = () => {
    // console.log(data)

    const newItem = {
      task: 'Vasya Pupkin',
      id: 1528817084359,
      completed: false
    };

    this.setState( { todoList: [...this.state.todoList, newItem] } );
  }

  // handleTwo = event => {
  //   this.setState({todoList: []});
  // }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todoList={this.state.todoList} />
        <TodoForm handleSubmit={this.handleSubmit} />

        {/* <p>{this.state.tasks}</p> */}
      </div>
    );
  }
}

export default App;
