import React from "react"

const ToDo = ({ todo, editToDo, removeToDo }) => {
  return (
    <div className="todoitem">
      {todo.text}
      <button onClick={() => editToDo(todo.id)}>Edit</button>
      <button onClick={() => removeToDo(todo.id)}>Delete</button>
    </div>
  );
};

export default ToDo