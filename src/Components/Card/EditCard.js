import React, {Component} from 'react';
import axios from 'axios';

class EditCard extends Component{
    constructor(props){
        super(props);
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

    handleChange(stateKey, event) {
        let obj={};
        obj[stateKey] = event.target.value
        this.setState(obj);

      }

      submitForm(e){
          e.preventDefault()
          axios.patch('/api/updateImage', )
      }

    render(){
        return (
            <div>
                <form>
                <label className="l">
              Location
                <input type ="text" onChange={(event) => this.handleChange("location", event)} className = "i" required/></label>
            <label className="l">
              City
                 <input type="text" onChange={(event) => this.handleChange("city", event)} className ="i" required/></label>
            <label className="l">
              State
                <input type="text" onChange={(event) => this.handleChange("state", event)} className="i" /></label>
            <label className="l">
              Country
                <input type="text" onChange={(event) => this.handleChange("country", event)} className="i" required/> </label>
            <label className="l">
              Description
                <input type="text" onChange={(event) => this.handleChange("notes", event)} className="i" required/></label>
                <div>
            <button onClick={this.submitForm} className="save">Save</button> </div>
                </form>
            </div>
        )
        
    }
}