import React from "react"

const ToDo = ({ todo, editToDo, removeToDo }) => {
  return (
    <div className="todoitem">
      {todo.text}
      <button onClick={() => editToDo(todo.id)} style={{ cursor: "pointer" }}>
        Edit
      </button>
      <button onClick={() => removeToDo(todo.id)} style={{ cursor: "pointer" }}>
        Delete
      </button>
    </div>
  );
};

export default ToDo