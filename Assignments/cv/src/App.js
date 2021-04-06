import React, { Component } from "react";
import Requiredinfo from "./components/Requiredinfo";
import Edexperience from "./components/Edexperience";
import Workexperience from "./components/Workexperience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fName: "",
      lName: "",
      userEmail: "",
      mobNumber: "",
      DOB: "",
      studyLoc: "",
      studyField: "",
      startStudy: "",
      endStudy: "",
      compName: "",
      compTitle: "",
      startWork: "",
      endWork: "",
      workSummary: "",
      reqdInfo: "",
      edExp: "",
      workExp: "",
      userCV: [],
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.reqdInfoSubmitChange = this.reqdInfoSubmitChange.bind(this);
    this.edExpSubmitChange = this.edExpSubmitChange.bind(this);
    this.workExpSubmitChange = this.workExpSubmitChange.bind(this);
  }

  onHandleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  reqdInfoSubmitChange = (e) => {
    e.preventDefault();

    this.setState(
      {
        reqdInfo: {
          fName: this.state.fName,
          lName: this.state.lName,
          userEmail: this.state.userEmail,
          mobNumber: this.state.mobNumber,
          DOB: this.state.DOB,
        },
        fName: "",
        lName: "",
        userEmail: "",
        mobNumber: "",
        DOB: "",
        
        // userCV: this.state.userCV.concat(this.state.reqdInfo),
      },
      () => console.log(this.state.reqdInfo),
    );
  };

  edExpSubmitChange = (e) => {
    e.preventDefault();

    this.setState(
      {
        edExp: {
          studyLoc: this.state.studyLoc,
          studyField: this.state.studyField,
          startStudy: this.state.startStudy,
          endStudy: this.state.endStudy,
        },
        // userCV: this.state.userCV.concat(this.state.edExp),
        studyLoc: "",
        studyField: "",
        startStudy: "",
        endStudy: "",
      },
      () => console.log(this.state.edExp),
    );
  };

  workExpSubmitChange = (e) => {
    e.preventDefault();

    this.setState(
      {
        workExp: {
          compName: this.state.compName,
          compTitle: this.state.compTitle,
          startWork: this.state.startWork,
          endWork: this.state.endWork,
          workSummary: this.state.workSummary,
        },
        // userCV: this.state.userCV.concat(this.state.workExp),
        compName: "",
        compTitle: "",
        startWork: "",
        endWork: "",
        workSummary: "",
      },
      () => console.log(this.state.workExp),
    );
  };

  cvAddition = (e) =>{
    e.preventDefault();

    this.setState({
      userCV : {...this.state.reqdInfo, ...this.state.edExp, ...this.state.workExp}
    }, () => console.log(this.state.userCV),)
  }

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
                value={this.state.fName}
                onChange={this.onHandleChange}
                placeholder="First name"
                required
              />
            </div>
            <div className="lName">
              <label htmlFor="lName">Last Name:</label>
              <input
                type="text"
                name="lName"
                id="lNameInput"
                value={this.state.lName}
                onChange={this.onHandleChange}
                placeholder="Last name"
                required
              />
            </div>
            <div className="userEmail">
              <label htmlFor="useremail">Email:</label>
              <input
                type="email"
                name="userEmail"
                id="userEmailInput"
                value={this.state.userEmail}
                onChange={this.onHandleChange}
                placeholder="example@abc.com"
                required
              />
            </div>
            <div className="mobNumber">
              <label htmlFor="mobNumber">Mobile Number:</label>
              <input
                type="number"
                name="mobNumber"
                id="mobumberInput"
                value={this.state.mobNumber}
                onChange={this.onHandleChange}
                placeholder="123-456-789"
                required
              />
            </div>
            <div className="DOB">
              <label htmlFor="DOB">Date of Birth:</label>
              <input
                type="date"
                name="DOB"
                id="DOBInput"
                value={this.state.DOB}
                onChange={this.onHandleChange}
                required
              />
            </div>
            <button type="submit" onClick={this.reqdInfoSubmitChange}>
              Save
            </button>
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
                value={this.state.studyLoc}
                onChange={this.onHandleChange}
                placeholder="University/College Name"
              />
            </div>
            <div className="studyField">
              <label htmlFor="studyField">Field of Study:</label>
              <input
                type="text"
                name="studyField"
                id="studyFieldInput"
                value={this.state.studyField}
                onChange={this.onHandleChange}
                placeholder="Field of Study"
              />
            </div>
            <div className="startStudy">
              <label htmlFor="startStudy">From:</label>
              <input
                type="date"
                name="startStudy"
                id="startStudyInput"
                value={this.state.startStudy}
                onChange={this.onHandleChange}
                required
              />
            </div>
            <div className="endStudy">
              <label htmlFor="endStudy">To:</label>
              <input
                type="date"
                name="endStudy"
                id="endStudyInput"
                value={this.state.endStudy}
                onChange={this.onHandleChange}
                required
              />
            </div>
            <button type="submit" onClick={this.edExpSubmitChange}>
              Save
            </button>
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
                value={this.state.compName}
                onChange={this.onHandleChange}
                placeholder="Company Name"
              />
            </div>
            <div className="compTitle">
              <label htmlFor="compTitle">Title:</label>
              <input
                type="text"
                name="compTitle"
                id="compTitleInput"
                value={this.state.compTitle}
                onChange={this.onHandleChange}
                placeholder="Title at Workplace"
              />
            </div>
            <div className="startWork">
              <label htmlFor="startWork">From:</label>
              <input
                type="date"
                name="startWork"
                id="startWorkInput"
                value={this.state.startWork}
                onChange={this.onHandleChange}
                required
              />
            </div>
            <div className="endWork">
              <label htmlFor="endWork">To:</label>
              <input
                type="date"
                name="endWork"
                id="endWorkInput"
                value={this.state.endWork}
                onChange={this.onHandleChange}
                required
              />
            </div>
            <div className="workSummary">
              <label htmlFor="workSummary">Work Summary:</label>
              <textarea
                name="workSummary"
                id="workSummaryInput"
                cols="30"
                rows="10"
                value={this.state.workSummary}
                onChange={this.onHandleChange}
              ></textarea>
            </div>
            <button type="submit" onClick={this.workExpSubmitChange}>
              Save
            </button>
          </div>

          <button type="submit" onClick={this.cvAddition}>
            Submit/Print
          </button>
        </form>

        {/* <Requiredinfo />
        <Edexperience />
        <Workexperience /> */}
      </div>
    );
  }
}

export default App;
