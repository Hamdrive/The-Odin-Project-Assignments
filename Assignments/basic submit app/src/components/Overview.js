import React from "react";
import uniqid from "uniqid";
import { IconContext } from "react-icons";
import { AiFillDelete } from "react-icons/ai";

const Overview = (props) =>{
    const {tasks} = props;

    return(
        <ol>
            
        {tasks.map((task, index) => {
            return (
              <li key={uniqid()} style={{display: "flex", alignItems: "center", fontSize: "22px"}}>
                {index+1 + ".   "}{task}
                <IconContext.Provider value={{ color: "red", size: "1em"}}>
                  <div>
                    <AiFillDelete />
                  </div>
                </IconContext.Provider>
              </li>
            );
        })}
            
        </ol>
    )
}

export default Overview;