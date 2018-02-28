import React, {Component} from 'react';
import Header from './../Header/Header';
import UserUploader from './UserUploader/UserUploader';

class UserAccount extends Component {
    constructor(props) {
    super(props)
    this.state = {
        images: [],
        

    }
}


render() {
    return (
        <div>
        <Header />
        <UserUploader />
        </div>
    )

}
}

export default UserAccount;