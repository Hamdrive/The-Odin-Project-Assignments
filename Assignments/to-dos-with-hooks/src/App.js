import { useState } from "react";
import ToDo from "./components/ToDo"
import uniqid from "uniqid";
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
      <button onClick={createToDo} style={{cursor: "pointer"}}>Add To-Do!</button>
    </form>
  );
};

const editToDoForm = () =>{}


function App() {
  const [todos, setTodos] = useState([
    { id: uniqid(), text: "Create To Do App" },
    { id: uniqid(), text: "Complete writeups" },
    {id: uniqid(),text: "Listen to 2000s songs"}
  ]);

  const addToDo = (todoitem) => {
    const newToDoList = [...todos, {id: uniqid(), text: todoitem}];
    setTodos(newToDoList);
  };

  const editToDo = (id) =>{
    if(todos.id === id){

    }
  }

  const removeToDo = (id) => {
    const newToDoList = todos.filter((todo) => todo.id !== id);
    setTodos(newToDoList);
  };
    
  return (
    <div className="App">
      <div className="todomain">
        <label> TO DO LIST</label>
        {todos.map((todo, index) => (
          <ToDo
            key={uniqid}
            index={index}
            todo={todo}
            editToDo={editToDo}
            removeToDo={removeToDo}
          />
        ))}

        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  ); 
}

export default App;
