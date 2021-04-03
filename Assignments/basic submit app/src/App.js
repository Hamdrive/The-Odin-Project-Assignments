import React, { Component } from "react";

class App extends Component {

  constructor(){
    super();

    this.state={
      task: "",
      tasks: [],
    };
  }
  
  render() {
    return (
      <div>
        <form>
          <label htmlFor="textInput">Enter Item</label>
          <input type="text" id="textInput"/>
          <button type="submit">Add to List</button>
        </form>
      </div>
    );
  }
}

export default App;
