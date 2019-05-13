import React, { Component } from "react";

export default class MernCrud extends Component {
  render() {
    return (
      <div>
        <h2>Hello</h2>
        <p className='homeWelcome'>
          This is a simple CRUD (create, read, update, and delete) application
          made with MongoDB, Express, React, and Node.js! <br /> Click on the "<span Style="color: red">Create Project</span>" link in the navbar!
        </p>
      </div>
    );
  }
}
