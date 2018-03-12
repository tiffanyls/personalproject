import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import Header from './../Header/Header';
import Searchbar from "./../Search/SearchBar";
import './Home.css';


class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
        image: []
    };

    }
    componentDidMount(){
        axios.get('/api/getImages').then(response => {
        
            this.setState({image: response.data[0].image});
        })
    }
    
    render(){
        return (
        <div className="container">
        <Header /> 
        <img src = {this.state.image} className="home-image"/>
        <div className="searchbar">
        <Searchbar />
        </div>
        
        </div>
        )}
}
export default withRouter(Home);