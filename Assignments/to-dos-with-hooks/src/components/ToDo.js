import React from "react"

const ToDo = ({ todo, toDoComplete, removeToDo }) => {
  const handleCompleteTask = () =>{
    toDoComplete(todo.id)
  }

  return (
    <div className="todoitem">
      {todo.isComplete === true ? <s>{todo.text}</s> : todo.text}
      {console.log(todo)}
      <button onClick={() => handleCompleteTask()} style={{ cursor: "pointer" }}>
        Completed
      </button>
      <button onClick={() => removeToDo(todo.id)} style={{ cursor: "pointer" }}>
        Delete
      </button>
    </div>
  );
};

export default ToDo