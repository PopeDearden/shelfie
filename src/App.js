import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import { HashRouter, Link} from "react-router-dom";
import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="nav">
            <div>UGGHHHH</div>
            <div className="link-wrap">
              <Link to="/" className="links">
                Dashboard
              </Link>
              <Link to="/add" className="links">
                Add Product
              </Link>
            </div>
          </nav>
          {routes}
        </div>
      </HashRouter>
    );
  }
}
