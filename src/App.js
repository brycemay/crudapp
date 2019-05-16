import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-tilt";
import MernCrud from "./components/homeCrud.js";
import CreateCrud from "./components/createCrud";
import EditCrud from "./components/editCrud";
import EditUpdate from './components/editupdate'
import logo from "./newlogo.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-nothing">
            <a className="navbar-brand" href="/" target="_black">
              {
                <Tilt
                  className="Tilt br2"
                  options={{ max: 75 }}
                  style={{ height: 200, width: 200 }}
                >
                  <div className="Tilt-inner">
                    {" "}
                    <img src={logo} width="200" height="200" alt=""/>{" "}
                  </div>
                </Tilt>
              }
            </a>
            <Link to="/" className="navbar-brand">
              My Website
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    CreateToDo
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit/:id" className="nav-link">
                    MyToDo's
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={MernCrud} />
          <Route path="/editupdate/:id" component={EditUpdate} />
          <Route path="/edit" component={EditCrud} />
          <Route path="/create" component={CreateCrud} />
          

        </div>
      </Router>
    );
  }
}

export default App;
