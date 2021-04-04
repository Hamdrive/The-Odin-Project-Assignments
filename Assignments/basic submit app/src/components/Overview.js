import React from "react";
import { IconContext } from "react-icons";
import { AiFillDelete } from "react-icons/ai";

const Overview = (props) => {
  const { tasks, taskDeletion } = props;

  return (
    <ol>
      {tasks.map((task, index) => {
        return (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "22px",
            }}>
            {index + 1 + ".   "}
            {task.taskValue}
            <IconContext.Provider value={{ color: "red", size: "1em" }}>
              <div>
                <AiFillDelete onClick={() => taskDeletion(task.id)} />
              </div>
            </IconContext.Provider>
          </li>
        );
      })}
    </ol>
  );
};

export default Overview;
