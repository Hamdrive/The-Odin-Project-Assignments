import React, { Component } from "react";
import Requiredinfo from "../components/Requiredinfo";
import Edexperience from "../components/Edexperience";
import Workexperience from "../components/Workexperience";

class App extends Component{


  render(){
    return (
      <div>
        <Requiredinfo />
        <Edexperience />
        <Workexperience />
      </div>
    )
  }
}

export default App;
