import { useState } from "react";
import ToDo from "./components/ToDo"
import "./App.css";


function App() {
  const [todos, setTodos] = useState([
    { text: "Create To Do App" },
    { text: "Complete writeups" },
    {text: "Listen to 2000s songs"}
  ]);
    
  return (
    <div className="App">
      <div className="todomain">
        <label> TO DO LIST</label>
        {todos.map((todo, index) => (
          <ToDo key={index} todo={todo} />
        ))}
      </div>
    </div>
  ); 
}

export default App;
