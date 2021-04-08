import { useState } from "react";
import ToDo from "./components/ToDo"
import "./App.css";

const ToDoForm = ({ addToDo }) => {
  const [todoitem, setTodoitem] = useState("");

  const createToDo = (e) => {
    e.preventDefault();
    addToDo(todoitem);
    setTodoitem("")
  };

  return (
    <form onSubmit={createToDo}>
      <input type="text" name="text" id="text" value={todoitem} onChange={(e) => setTodoitem(e.target.value)}/>
    </form>
  );
};


function App() {
  const [todos, setTodos] = useState([
    { text: "Create To Do App" },
    { text: "Complete writeups" },
    {text: "Listen to 2000s songs"}
  ]);

  const addToDo = (todoitem) => {
    const newToDoList = [...todos, {text: todoitem}];
    setTodos(newToDoList);
  };
    
  return (
    <div className="App">
      <div className="todomain">
        <label> TO DO LIST</label>
        {todos.map((todo, index) => (
          <ToDo key={index} index={index} todo={todo} />
        ))}
      
        <ToDoForm addToDo={addToDo}/>
      </div>
    </div>
  ); 
}

export default App;
