import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const theList = [
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
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      theList: theList
    }; 
  }

  //toggle clear things completed
  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      theList: this.state.theList.filter(item => {
        return !item.completed;
      })
    });
  }

  //add an item to do
  handleAddTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Math.random(),
      purchased: false
    };

    //console.log(newTask.id);

    this.setState({
      ...this.state,
      theList: [...this.state.theList, newTask]
    });
  }

  //toggle completed
  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state,
      theList: this.state.theList.map(task=>{
        if(task.id === selectedTask.id){
          return({
            ...task,
            completed: !task.completed
          })
        } else {
          return task;
        }
      })
    });
  }



  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoForm handleAddTask = {this.handleAddTask}/>
        <TodoList handleToggleTask={this.handleToggleTask} theList={this.state.theList}/>
        <button onClick = {this.handleClearCompleted} className='clear-button'>Clear Completed Items</button>

      </div>
    );
  }
}

export default App;
