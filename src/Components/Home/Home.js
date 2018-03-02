import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import Header from './../Header/Header';

class Home extends Component{
    
    render(){
        return <div>
        <Header />
       <button onClick={() => window.location.href = "http://localhost:3001/login"}>Login/Sign Up</button>
        </div>
    }
}
export default withRouter(Home);