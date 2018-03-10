import React, {Component} from 'react';
import firebase from '../../../fire';
import axios from 'axios';
import './UserUploader.css';


class UserUploader extends Component {
    constructor() {
        super();
        this.state = {
            image: "",
            location: "",
            city: "",
            state: "",
            country: "",
            notes: "",
        };

        this.uploadImage = this.uploadImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(stateKey, event) {
        let obj={};
        obj[stateKey] = event.target.value
        this.setState(obj);

      }

    submitForm(e){
        e.preventDefault()
        axios.post('/api/imageAndMetadata', {image: this.state.image, location: this.state.location, city: this.state.city, state: this.state.state, country: this.state.country, notes: this.state.notes })
    }
    uploadImage(file){
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef
            .child (`images/${file[0].name}`)
            .put(file[0]);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    console.log(snapshot);
                },
                (error) => {},
                (success) => {
                    this.setState({image:uploadTask.snapshot.downloadURL});
                },
            );
    }

    render (){
        return (
            <div>
                <h3> Upload New </h3>
            <div className="l">
                <div className="loader">
                <input type="file" onChange={(event) => this.uploadImage(event.target.files)} className ="choose" required/>
                <form onSubmit={this.submitForm}>           
            <label className="l">
              Location
                <input type ="text" onChange={(event) => this.handleChange("location", event)} placeholder="ex: Eiffel Tower or 500 Main St" className = "i" required/></label>
            <label className="l">
              City
                 <input type="text" onChange={(event) => this.handleChange("city", event)} placeholder="Paris" className ="i" required/></label>
            <label className="l">
              State
                <input type="text" onChange={(event) => this.handleChange("state", event)} placeholder="Texas" className="i" /></label>
            <label className="l">
              Country
                <input type="text" onChange={(event) => this.handleChange("country", event)} placeholder="France" className="i" required/> </label>
            <label className="l">
              Description
                <input type="text" onChange={(event) => this.handleChange("notes", event)} placeholder="Took from 2nd Floor" className="i" required/></label>
                <div>
            <button onClick={this.submitForm} className="submit">Submit</button> </div>
                </form>
               </div> 
            </div>
            </div>
        )
    }
}

export default UserUploader;