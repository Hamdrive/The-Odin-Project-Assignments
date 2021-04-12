import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm"
import uniqid from "uniqid";
import "./App.css";



function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let storedToDos = JSON.parse(localStorage.getItem("react-todos"))
    if(storedToDos){
      setTodos(storedToDos)
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem("react-todos", JSON.stringify(todos));
  },[todos])

  const addToDo = (todoitem) => {
    if(!todoitem){return}
    const newToDoList = [
      ...todos,
      { id: uniqid(), isComplete: false, text: todoitem },
    ];
    setTodos(newToDoList);
  };

  const toDoComplete = (id) =>
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      })
    );    

  const removeToDo = (id) => {
    const newToDoList = todos.filter((todo) => todo.id !== id);
    setTodos(newToDoList);
  };

  return (
    <div className="app">
      <div className="todomain">
        <label className="title"> TO DO LIST 📝</label>
        <div className="todoinput">
          <ToDoForm addToDo={addToDo} />
        </div>
        <div className="todos">
        {todos.map((todo, index) => (
          <ToDo
            key={uniqid()}
            index={index}
            todo={todo}
            toDoComplete={toDoComplete}
            removeToDo={removeToDo}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
