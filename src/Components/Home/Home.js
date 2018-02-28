import React, {Component} from 'react';

import Header from './../Header/Header';

class Home extends Component{
    
    render(){
        return <div>
        <Header />
        <a href = "http://localhost:3001/login"><button>Login/Sign Up</button></a>
        </div>
    }
}
export default Home;