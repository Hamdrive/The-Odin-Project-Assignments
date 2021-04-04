import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  taskInput = (e) => {
    const newTask = { id: uniqid(), taskValue: e.target.value };
    this.setState({
      task: newTask,
    });
  };

  taskAddition = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };


  taskDeletion = (id) => {
    const newTaskList = Object.assign([], this.state.tasks).filter(
      (task) => task.id !== id
    );
    
    this.setState({
      tasks: newTaskList,
    })
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="textInput">Enter Item</label>
          <input
            type="text"
            id="textInput"
            value={task.taskValue || ""}
            onChange={this.taskInput}
          />
          <button type="submit" onClick={this.taskAddition}>
            Add to List
          </button>
        </form>
        <Overview tasks={tasks} taskDeletion={this.taskDeletion} />
      </div>
    );
  }
}

export default App;
