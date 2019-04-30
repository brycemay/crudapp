import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MernCrud from './components/homeCrud.js';
import CreateCrud from './components/createCrud';
import EditCrud from './components/editCrud';
import logo from './monkeyface.jpeg';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="container">
      
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className ="navbar-brand" href ="/" target="_black">
      <img src={logo} width="45" height="45"/>
      </a>
      <Link to="/" className="navbar-brand">My Website</Link>
      <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link" type="button">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/create" className="nav-link" type="button">CreateProject</Link>
        </li>
        <li className="navbar-item">
          <Link to="/edit/:id" className="nav-link" type="button">MyProjects</Link>
        </li>
      </ul>
      </div>
      </nav>

      <Route path="/" exact component={MernCrud}/>
      <Route path="/edit/:id" component={EditCrud}/>
      <Route path="/create" component={CreateCrud}/>

      </div>
      </Router>
    );
  }
}


  


export default App;
