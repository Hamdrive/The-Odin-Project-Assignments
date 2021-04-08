import React from "react";

const Edexperience = (props) =>{
    const {userCV} = props;

    return (
      <div>
        <label htmlFor="">
          <u>Education Experience</u>
        </label>
        <p>{userCV.studyLoc}</p>
        <p>{userCV.studyField}</p>
        <p>{userCV.startStudy}</p>
        <p>{userCV.endStudy}</p>
      </div>
    );

}

export default Edexperience;