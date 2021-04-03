import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {

  constructor(){
    super();

    this.state={
      task: "",
      tasks: [],
    };
  }

  taskInput = (e) =>{
    this.setState({
      task: e.target.value,
    })
  }

  taskAddition = (e) =>{
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  }


  
  render() {
    const {task, tasks} = this.state;

    return (
      <div>
        <form>
          <label htmlFor="textInput">Enter Item</label>
          <input
            type="text"
            id="textInput"
            value={task}
            onChange={this.taskInput}
          />
          <button type="submit" onClick={this.taskAddition}>
            Add to List
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
