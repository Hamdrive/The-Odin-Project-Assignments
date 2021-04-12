import React from "react"
import { FaTrash, FaPen } from "react-icons/fa";

const ToDo = ({ todo, toDoComplete, removeToDo }) => {
  const handleCompleteTask = () =>{
    toDoComplete(todo.id)
  }

  return (
    <div className="todoitem">
      <div className="todolistitem">
        {todo.isComplete === true ? <s>{todo.text}</s> : <p>{todo.text}</p>}
        {console.log(todo)}
      </div>

      <div className="complete">
        <text className="completebtn" onClick={() => handleCompleteTask()}>
          <FaPen />
        </text>
      </div>
      <div className="delete">
        <text className="deletebtn" onClick={() => removeToDo(todo.id)}>
          <FaTrash />
        </text>
      </div>
    </div>
  );
};

export default ToDo