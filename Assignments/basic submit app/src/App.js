import React, { Component } from "react";

class App extends Component {

  constructor(){
    super();

    this.state={
      task: "",
      tasks: [],
    };
  }

  taskInput = (e) =>{
    this.setState={
      task: e.target.value,
    }
  }

  taskAddition = (e) =>{
    e.preventDefault();
    this.setState={
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    }
  }


  
  render() {
    return (
      <div>
        <form>
          <label htmlFor="textInput">Enter Item</label>
          <input type="text" id="textInput" value={this.state.task} onChange={this.state.taskInput}/>
          <button type="submit" onSubmit={this.state.taskAddition}>Add to List</button>
        </form>
      </div>
    );
  }
}

export default App;
