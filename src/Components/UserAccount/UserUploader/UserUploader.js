import React, {Component} from 'react';
import firebase from '../../../fire';

class UserUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            file: "",
            location: "",
            city: "",
            state: "",
            country: ""
        };

        this.uploadImage = this.uploadImage.bind(this);
    }

    uploadImage(){
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef
            .child (`images/${this.state.file.name}`)
            .put(this.state.file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    console.log(snapshot);
                },
                (error) => {},
                (success) => {
                    console.log(uploadTask.snapshot.downloadURL);
                },
            );
    }

    render (){
        return (
            <div>
                <h1> Upload New </h1>
                <form onSubmit={(event) => this.uploadImage(event)}>
                <label>
                    Location
                <input type ="text" location={this.state.value} onChange={this.handleChange} placeholder="Enter location, ex: Eiffel Tower or 500 Main St" required/></label>
                <label>
                    City
                <input type="text" city={this.state.value} onChange={this.handleChange} placeholder="Paris" required/></label>
                <label>
                    State
                <input type="text" state={this.state.value} onChange={this.handleChange} placeholder="Texas"/></label>
                <label>
                    Country
                    <input type="text" state={this.state.value} onChange={this.handleChange} placeholder="France" required/> </label>
                <input type="file" onChange={this.uploadImage}/>
                <button onClick ={this.uploadImage}>Upload New</button>
                </form>
            </div>
        )
    }
}

export default UserUploader;