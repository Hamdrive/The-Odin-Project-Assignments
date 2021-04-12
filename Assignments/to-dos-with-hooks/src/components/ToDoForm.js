import React, {useState} from "react"

const placeholderArray = [
  "Zoom Call Meeting at 11AM",
  "Pick Up Dry cleaning",
  "Get Groceries",
  "Go to the Gym",
  "Take A Bath",
  "Walk the Dog",
  "Take out the Trash",
  "Call Mom",
  "Doctor's Appointment at 10AM",
];
const placeholderText = Math.floor(Math.random() * 6);

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
        placeholder={placeholderArray[placeholderText]}
      />
      <text className="addtodo" onClick={createToDo}>
        ✏️
      </text>
    </form>
  );
};

export default ToDoForm;
