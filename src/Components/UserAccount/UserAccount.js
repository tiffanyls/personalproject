import React, {Component} from 'react';
import Header from './../Header/Header';
import UserUploader from './UserUploader/UserUploader';
import Card from './../Card/Card';

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
        <Card />
        </div>
    )
}
}

export default UserAccount;