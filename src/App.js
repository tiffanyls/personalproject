import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import routes from './routes';
import {withRouter} from 'react-router-dom';


class App extends Component {
  // componentDidMount() {
  //   ;
  // }
  
  render() {
    console.log(this.props);
    return (
      <div>
        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(App));
