import React, {Component} from 'react';
import axios from 'axios';
import Header from './../Header/Header';
import UserUploader from './UserUploader/UserUploader';
import Card from './../Card/Card';

class UserAccount extends Component {
    constructor(props) {
    super(props) 
       this.state = {images: []}
       this.refreshPage=this.refreshPage.bind(this);
    }

    componentDidMount(){
        axios.get('/api/userImages').then(response =>{
            this.setState({images: response.data});
        })
    }
    
    refreshPage(){
        axios.get('/api/userImages').then(response =>{
            this.setState({images: response.data});
        })
    }
render() {
  
    return (
        <div>
        <Header refreshPage={this.refreshPage}/>
        <Card newImages={this.state.images} refreshPage={this.refreshPage}/>
        </div>
    )
}
}

export default UserAccount;

