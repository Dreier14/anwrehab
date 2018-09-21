import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from "./routes";
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        {routes}
      </div>
    );
  }
}

export default App;
