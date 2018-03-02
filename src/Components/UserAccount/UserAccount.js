import React, {Component} from 'react';
import Header from './../Header/Header';
import UserUploader from './UserUploader/UserUploader';
import ImageDisplay from '../ImageDisplay/ImageDisplay';

class UserAccount extends Component {
    constructor(props) {
    super(props)
     
    }


render() {
    console.log(this.props)
    return (
        <div>
        <Header />
        <UserUploader />
        <a href = "http://localhost:3001/logout"><button>Logout</button></a>
        <ImageDisplay />
        </div>
    )
}
}
    




export default UserAccount;