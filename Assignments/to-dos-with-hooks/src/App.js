import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import uniqid from "uniqid";
import "./App.css";

const ToDoForm = ({ addToDo }) => {
  const [todoitem, setTodoitem] = useState("");

  const createToDo = (e) => {
    e.preventDefault();
    addToDo(todoitem);
    setTodoitem("");
  };

  return (
    <form onSubmit={createToDo}>
      <input
        type="text"
        name="text"
        id="text"
        value={todoitem}
        onChange={(e) => setTodoitem(e.target.value)}
      />
      <button onClick={createToDo} style={{ cursor: "pointer" }}>
        Add To-Do!
      </button>
    </form>
  );
};

function App() {
  const [todos, setTodos] = useState([
    // { id: uniqid(), isComplete: false, text: "Eat" },
    // { id: uniqid(), isComplete: false, text: "Sleep" },
    // { id: uniqid(), isComplete: false, text: "React" },
    // { id: uniqid(), isComplete: false, text: "Repeat" },
  ]);

  useEffect(() => {
    let storedToDos = JSON.parse(localStorage.getItem("todolisthooks"))
    if(storedToDos){
      setTodos(storedToDos)
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem("todolisthooks", JSON.stringify(todos))
  },[todos])

  const addToDo = (todoitem) => {
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
    <div className="App">
      <div className="todomain">
        <label> TO DO LIST</label>
        <ToDoForm addToDo={addToDo} />
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
  );
}

export default App;
