import React, { Component } from "react";

export default class EditCrud extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch("http://localhost:4000")
      .then(results => results.json())

      .then(data => this.setState({ projects: data }));
  }

  onDelete = async vladimir => {
    await fetch(`http://localhost:4000/${vladimir}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
    }
  })
  window.location.reload()
  //redirect or refresh the page
};
  render() {
    return (
      <div>
        <h3>Edit Project </h3>
        <table>
          <thead>
            {this.state.projects.map((user, i) => (
              <ul key={i}>
              {console.log(user)}
                <td> Project: {user.crud_description}</td> <br />
                <td> What For: {user.crud_responsible}</td>
                <br />
                <td> Priority: {user.crud_priority}</td> <br />
                <td>
                  <button>Edit</button>
                  <button onClick={() => {this.onDelete(user._id)}}>Delete</button>
                </td>
              </ul>
            ))}
            {console.log(this.state)}
          </thead>
        </table>
      </div>
    );
  }
}
