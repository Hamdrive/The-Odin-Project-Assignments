import React, {useState} from "react"

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

export default ToDoForm;
