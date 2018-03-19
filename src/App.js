import React, { Component } from 'react';

import { connect } from 'react-redux';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import Footer from './Components/Footer/Footer';


class App extends Component {
  
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
