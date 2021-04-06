import React from "react";

const Requiredinfo = (props) =>{
    const {userCV} = props;

    console.log(userCV)
    return (
      <div>
        <label htmlFor="">
          <u>Required Information</u>
        </label>
        <p>{userCV.fName}</p>
        <p>{userCV.lName}</p>
        <p>{userCV.userEmail}</p>
        <p>{userCV.mobNumber}</p>
        <p>{userCV.DOB}</p>
      </div>
    );
};

export default Requiredinfo;