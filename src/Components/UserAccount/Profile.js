import React, {Component} from 'react';
import axios from 'axios';

class Profile extends Component{
    constructor() {
    super();
        this.state ={
            profile_pic: '',
            username: '',
            name: '',

        };
}
componentDidMount(){
    axios.get('/api/getUser').then(response =>{
        this.setState({users: response.data})
    })
}

}