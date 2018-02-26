import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import routes from './routes';
import Home from './Components/Home/Home';

class App extends Component {
  // componentDidMount() {
  //   ;
  // }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <Home />
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
