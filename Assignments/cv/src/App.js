import React, { Component } from "react";
import Requiredinfo from "./components/Requiredinfo";
import Edexperience from "./components/Edexperience";
import Workexperience from "./components/Workexperience";

class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="cvTitle">
          <u>CV Generator - Get your CV in 5 minutes!</u>
        </label>

        <form>
          <div className="reqInfo">
            <label htmlFor="reqText">
              <u>Required Information</u>
            </label>
            <div className="fName">
              <label htmlFor="fName">First Name:</label>
              <input
                type="text"
                name="fName"
                id="fNameInput"
                placeholder="First name"
              />
            </div>
            <div className="lName">
              <label htmlFor="lName">Last Name:</label>
              <input
                type="text"
                name="lName"
                id="lNameInput"
                placeholder="Last name"
              />
            </div>
            <div className="userEmail">
              <label htmlFor="useremail">Email:</label>
              <input
                type="email"
                name="userEmail"
                id="userEmailInput"
                placeholder="example@abc.com"
              />
            </div>
            <div className="mobNumber">
              <label htmlFor="mobNumber">Mobile Number:</label>
              <input
                type="number"
                name="mobNumber"
                id="mobumberInput"
                placeholder="123-456-789"
              />
            </div>
            <div className="DOB">
              <label htmlFor="DOB">Date of Birth:</label>
              <input type="date" name="DOB" id="DOBInput" />
            </div>
            <button>Save</button>
          </div>

          <div className="edExpInfo">
            <label htmlFor="edExpText">
              <u>Education Experience</u>
            </label>
            <div className="studyLoc">
              <label htmlFor="studyLoc">University/College Name:</label>
              <input
                type="text"
                name="studyLoc"
                id="studyLocInput"
                placeholder="University/College Name"
              />
            </div>
            <div className="studyField">
              <label htmlFor="studyField">Field of Study:</label>
              <input
                type="text"
                name="studyField"
                id="studyFieldInput"
                placeholder="Field of Study"
              />
            </div>
            <div className="startStudy">
              <label htmlFor="startStudy">From:</label>
              <input type="date" name="startStudy" id="startStudyInput" />
            </div>
            <div className="endStudy">
              <label htmlFor="endStudy">To:</label>
              <input type="date" name="endStudy" id="endStudyInput" />
            </div>
            <button>Save</button>
          </div>

          <div className="workExpInfo">

            <label htmlFor="workExpText">
              <u>Education Experience</u>
            </label>
            <div className="compName">
              <label htmlFor="compName">Company Name:</label>
              <input
                type="text"
                name="compName"
                id="compNameInput"
                placeholder="Company Name"
              />
            </div>
            <div className="compTitle">
              <label htmlFor="compTitle">Title:</label>
              <input
                type="text"
                name="compTitle"
                id="compTitleInput"
                placeholder="Field of Study"
              />
            </div>
            <div className="startWork">
              <label htmlFor="startWork">From:</label>
              <input type="date" name="startWork" id="startWorkInput" />
            </div>
            <div className="endWork">
              <label htmlFor="endWork">To:</label>
              <input type="date" name="endWork" id="endWorkInput" />
            </div>
            <div className="workSummary">
              <label htmlFor="workSummary">Work Summary:</label>
              <textarea
                name="workSummary"
                id="workSummaryInput"
                cols="30"
                rows="10"></textarea>
            </div>
            <button>Save</button>
          </div>
        
          <button type="submit">Submit/Print</button>
        </form>

        {/* <Requiredinfo />
        <Edexperience />
        <Workexperience /> */}
      </div>
    );
  }
}

export default App;
