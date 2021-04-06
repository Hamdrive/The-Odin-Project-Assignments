import React from "react";

const Workexperience = (props) =>{
    const { userCV } = props;

    return (
      <div>
        <label htmlFor="">
          <u>Work Experience</u>
        </label>
        <p>{userCV.compName}</p>
        <p>{userCV.compTitle}</p>
        <p>{userCV.startWork}</p>
        <p>{userCV.endWork}</p>
        <p>{userCV.workSummary}</p>
      </div>
    );
} 

export default Workexperience;