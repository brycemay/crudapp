import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'

export default class CreateCrud extends Component {
  constructor(props) {
    super(props);

    this.onChangeCrudDescription = this.onChangeCrudDescription = this.onChangeCrudDescription.bind(
      this
    );
    this.onChangeCrudResponsible = this.onChangeCrudResponsible = this.onChangeCrudResponsible.bind(
      this
    );
    this.onChangeCrudPriority = this.onChangeCrudPriority = this.onChangeCrudPriority.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      crud_description: "",
      crud_responsible: "",
      crud_priority: "",
      crud_completed: false
    };
  }

  onChangeCrudDescription(e) {
    this.setState({
      crud_description: e.target.value
    });
  }

  onChangeCrudResponsible(e) {
    this.setState({
      crud_responsible: e.target.value
    });
  }

  onChangeCrudPriority(e) {
    this.setState({
      crud_priority: e.target.value
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    await fetch("http://localhost:4000", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
      
    });
    console.log(`Form submitted`);
    console.log(`description ${this.state.crud_description}`);
    console.log(`responsible ${this.state.crud_responsible}`);
    console.log(`priority ${this.state.crud_priority}`);
    console.log(`completed ${this.state.crud_completed}`);

    this.setState({
      crud_description: "",
      crud_responsible: "",
      crud_priority: "",
      crud_completed: false
    });
    this.props.history.push('/edit');
    //this is where you would put a redirect to a new page
  };
  
  render() {
    console.log(this.state);
    return (
      <div style={{ marginTop: 70 }} className="forms">
        <h3 className="hdr3">Create New Project</h3>
        <form onSubmit={this.onSubmit} className="createForm">
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.crud_description}
              onChange={this.onChangeCrudDescription}
            />
          </div>
          <div className="form-group">
            <label>What For:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.crud_responsible}
              onChange={this.onChangeCrudResponsible}
            />
          </div>
          <label>Priority:</label>
          <div className="form-group">
            <div className="from-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.crud_priority === "Low"}
                onChange={this.onChangeCrudPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="from-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.crud_priority === "Medium"}
                onChange={this.onChangeCrudPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="from-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.crud_priority === "High"}
                onChange={this.onChangeCrudPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
         <input type="submit" value="Create" className="btn btn-dark" />
          </div>
        </form>
      </div>
    );
  }
}
