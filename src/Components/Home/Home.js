import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import Header from './../Header/Header';
import Searchbar from "./../Search/SearchBar";


class Home extends Component {
    constructor(){
        super();
        this.state ={
        image: []
    };

    }
    componentDidMount(){
        axios.get('/api/getImages').then(response => {
            this.setState({image: response.data})
        })
    }
    
    render(){
        return 
        <div>
        <Header /> <button onClick={() => window.location.href = "http://localhost:3001/login"}>Login/Sign Up</button>
        <Searchbar />
        </div>
    }
}
export default withRouter(Home);