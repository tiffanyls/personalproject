import React, {Component} from 'react';
import Header from './../Header/Header';
import UserUploader from './UserUploader/UserUploader';

class UserAccount extends Component {
    constructor(props) {
    super(props)
     
    }


render() {
    return (
        <div>
           <a href = "http://localhost:3001/logout"><button>Logout</button></a>
        <Header />
        <UserUploader />
        

        
        </div>
    )
}
}
    




export default UserAccount;