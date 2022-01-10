// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

// const TodoList = (props) => <p>{props.propsTodoList}</p>;

class Todo extends React.Component {
  render() {
    console.log(this.props)

    return <div>
        <p>{this.props.item.task}</p>
      </div>
  }
}

export default Todo;