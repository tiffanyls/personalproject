import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
