class SelectDegree extends React.Component {
  constructor(props) {
    super();
    this.state = {selectValue:'Select Degree'};
    this.handleDegreeChange=this.handleDegreeChange.bind(this)
  }

  handleDegreeChange(e) {
    this.setState({
      selectValue: e.target.value
    })
    this.props.appHandleDegreeChange(e.target.value)
  }

  render() {
    return (
      <div className="col-lg-1">
        <select name="SelectDegree" placeholder="Degree" value={this.state.selectValue} onChange={this.handleDegreeChange}>
          <option defaultValue="Select Degree" disabled>Select Degree</option>
          <option value="Associates">Associates</option>
          <option value="Bechelor">Bachelor</option>
          <option value="College">College</option>
          <option value="Master">Master</option>
          <option value="Ph.D.">Ph.D.</option>
          <option value="PostDoc">PostDoc</option>
        </select>
      </div>
    );
  }
}

class School extends React.Component {
  constructor() {
    super();
    this.handleSchoolChange = this.handleSchoolChange.bind(this)
  }

  handleSchoolChange(e) {
    this.props.appHandleSchoolChange(e.target.value)
  }

  render() {
    return (
      <div className="col-lg-1">
        <input 
          type='text' 
          placeholder="Enter School"
          onChange={this.handleSchoolChange} />
      </div>
    );
  }
}

class From extends React.Component {
  constructor() {
    super();
    this.handleFromChange = this.handleFromChange.bind(this)
  }

  handleFromChange(e) {
    this.props.appHandleFromChange(e.target.value)
  }

  render() {
    return (
      <div float="left">
      <input type='date' placeholder={this.props.value} onChange={this.handleFromChange}/>
      </div>
    );
  }
}


class To extends React.Component {
  constructor() {
    super();
    this.handleToChange = this.handleToChange.bind(this)
  }

  handleToChange(e) {
    this.props.appHandleToChange(e.target.value)
  }

  render() {
    return (
      <div float="left">
      <input type='date' placeholder={this.props.value} onChange={this.handleToChange}/>
      </div>
    );
  }
}

class AddEducation extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.props.handleClick()
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

class RemoveLastEducation extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.props.handleClick()
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Remove Last Added Education</button>
      </div>
    )
  }
}

const EducationStyle = {
  display: 'flex'
}

class Education extends React.Component {
  render() {
    return (
      <div className="row" style={EducationStyle}>
        <SelectDegree appHandleDegreeChange={this.props.appHandleDegreeChange} />
        <School appHandleSchoolChange={this.props.appHandleSchoolChange}/>
        <From appHandleFromChange={this.props.appHandleFromChange}/>
        <To appHandleToChange={this.props.appHandleToChange}/>
        <AddEducation handleClick={this.props.appHandleAddEducation}/>
        <RemoveLastEducation handleClick={this.props.appHandleRemoveLastEducation}/>
      </div>
    )
  }
}

class Summary extends React.Component {
  render() {
    return (
      <div>
      <h1> Summary of Current Input </h1>
      <ul className="EducationSummary">
        {this.props.summary.Education.map(m => {
            return (
              <li k={m.id}>
                <div>
                  {m.Degree}
                </div>
                <div>
                  {m.School}
                </div>
                <div>
                  {m.From}
                </div>
                <div>
                  {m.To}
                </div>
              </li>
            )
          })}
       </ul>
      <ul className="WorkSummary">
        {this.props.summary.Work.map(m => {
            return (
              <li k={m.id}>
                <div>
                  {m.Title}
                </div>
                <div>
                  {m.Company}
                </div>
                <div>
                  {m.From}
                </div>
                <div>
                  {m.To}
                </div>
              </li>
            )
          })}
       </ul>
       </div>
    )
  }
       //<p> {this.props.testMessage} </p>
}

const MockSummary = { 
  Education: [
    {
      Degree: "Master",
      School: "UC Berkeley",
      From: "2013-01-01",
      To: "2015-02-03"
    },
    {
      Degree: "Bechlor",
      School: "UC Berkeley",
      From: "2009-01-01",
      To: "2013-02-03"
    }
  ],
  Work: [
      {
        Title: "Software Engineer",
        Company: "Motorola",
        From: "2010-03-06",
        To: "2011-05-09",
      }
  ]
}

const EmptySummary = {Education:[],Work:[]}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      //summary: MockSummary,
      summary: EmptySummary,
      currentSelectedDegree: "",
      currentSchool:"",
      currentFrom:"",
      currentTo:"",
      currentSelectedTitle: "",
      currentCompany: "",
      currentWorkFrom: "",
      currentWorkTo: "",
      result:"no response yet"
    }
    this.handleDegreeChange=this.handleDegreeChange.bind(this)
    this.handleSchoolChange=this.handleSchoolChange.bind(this)
    this.handleFromChange=this.handleFromChange.bind(this)
    this.handleToChange=this.handleToChange.bind(this)
    this.handleAddEducation=this.handleAddEducation.bind(this)
    this.handleRemoveLastEducation=this.handleRemoveLastEducation.bind(this)
    this.handleTitleChange=this.handleTitleChange.bind(this)
    this.handleCompanyChange=this.handleCompanyChange.bind(this)
    this.handleWorkFromChange=this.handleWorkFromChange.bind(this)
    this.handleWorkToChange=this.handleWorkToChange.bind(this)
    this.handleAddWork=this.handleAddWork.bind(this)
    this.handleRemoveLastWork=this.handleRemoveLastWork.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleDegreeChange(m) {
    this.setState({
      currentSelectedDegree: m
    })
  }

  handleTitleChange(m) {
    this.setState({
      currentSelectedTitle: m
    })
  }
  handleCompanyChange(m) {
    this.setState({
      currentCompany: m
    })
  }

  handleWorkFromChange(m) {
    this.setState({
      currentWorkFrom: m
    })
  }

  handleWorkToChange(m) {
    this.setState({
      currentWorkTo: m
    })
  }

  handleAddWork() {
    const sum = this.state.summary
    sum.Work.push({
      Title: this.state.currentSelectTitle,
      Company: this.state.currentCompany,
      From: this.state.currentWorkFrom,
      To: this.state.currentWorkTo
    })
    this.setState({
      summary: sum
    })
    this.setState({
      currentSelectDegree: "",
      currentSchool: "",
      currentFrom: "",
      currentTo: "",
      currentSelectTitle: "",
      currentCompany: "",
      currentWorkFrom: "",
      currentWorkTo: ""
    })
  }

  handleRemoveLastEducation() {
    const sum = this.state.summary
    const last = sum.Education[sum.Education.length - 1]
    this.setState({
      currentSelectDegree: last.Degree,
      currentSchool: last.School,
      currentFrom: last.From,
      currentTo: last.to
    })
    sum.Education.splice(-1,1)
    this.setState({summary: sum })
  }

  handleRemoveLastWork() {
    const sum = this.state.summary
    const last = sum.Work[sum.Work.length - 1]
    this.setState({
      currentSelectTitle: last.Title,
      currentCompany: last.Company,
      currentWorkFrom: last.From,
      currentWorkTo: last.to
    })
    sum.Work.splice(-1,1)
    this.setState({summary: sum })
  }

  handleSubmit() {
    axios.get('http://localhost:5000/MockResponse', {
            headers: { 'crossOrigin': true },
          }).then(response => this.setState({result: response.data})) 
          //.then(response => console.log(response)) 
  }
  
  render() {
    return (
      <div className="app">
        <Summary summary={this.state.summary} testMessage={this.state.currentSelectedDegree +" " + this.state.currentSchool + " " + this.state.currentFrom + " " + this.state.currentTo}/>
        <h1>Education</h1>
        <Education title="Education" appHandleDegreeChange={this.handleDegreeChange} appHandleSchoolChange={this.handleSchoolChange} appHandleFromChange={this.handleFromChange} appHandleToChange={this.handleToChange} appHandleAddEducation={this.handleAddEducation} appHandleRemoveLastEducation={this.handleRemoveLastEducation} currentSummary = {this.state.summary.Education}/>
        <Work title="Work" appHandleTitleChange={this.handleTitleChange} appHandleCompanyChange={this.handleCompanyChange} appHandleWorkFromChange={this.handleWorkFromChange} appHandleWorkToChange={this.handleWorkToChange} appHandleAddWork={this.handleAddWork} appHandleRemoveLastWork={this.handleRemoveLastWork} currentSummary = {this.state.summary.Education}/>
        <button type="button" onClick={this.handleSubmit}> Submit Resume </button>
        <p>{this.state.result}</p>
      </div>
    )
  }
}


ReactDOM.render(
    <App />, 
    document.getElementById("root")
);

