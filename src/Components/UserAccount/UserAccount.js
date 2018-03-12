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
        
        <ImageDisplay />
        </div>
    )
}
}
    




export default UserAccount;