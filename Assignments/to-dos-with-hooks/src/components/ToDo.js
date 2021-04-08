import React from "react"

const ToDo = ({todo, index}) => {
    return (
        <div className="todoitem">
            {todo.text}
        </div>
    )
}

export default ToDo