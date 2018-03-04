import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import Header from './../Header/Header';
import Searchbar from "./../Search/SearchBar";

class Home extends Component{
    
    render(){
        return <div>
        <Header />
       <button onClick={() => window.location.href = "http://localhost:3001/login"}>Login/Sign Up</button>

       <Searchbar />
        </div>
    }
}
export default withRouter(Home);