import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Header.css';
import VP from './VP.png';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: false
        };
    }
    componentDidMount() {
        axios.get('/api/checkUser').then(response => {
            // console.log(response)
           if (response.data){
               this.setState({user: true})
           } else {
               this.setState({user: false})
           }
        })
       
        
    }
    
    render(){
        return(
            <div>
    <header className = "header">
         <Link to={`/`}>
         <img src={VP} className="logo" alt="VP Logo" /></Link>
         <div className="name"> VANTAGE POINT </div>
    <div>
        {!this.state.user ? <button onClick={() => window.location.href = "http://localhost:3001/login"} className="login">Login/Sign Up</button>
       : <a href = "http://localhost:3001/logout"><button>Logout</button></a>}
    </div>
     </header>
        </div>
        
)}
}
export default Header;


