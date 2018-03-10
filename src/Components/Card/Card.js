import React, {Component} from 'react';
import axios from 'axios';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            isEditing: false
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit(){
        this.setState({isEditing: !this.state.isEditing})
    }

    render(){
        if (this.state.isEditing){
            return (
                <div></div>
            )
        }
        // console.log(this.props.images)
        const {images} = this.props;
        const userImages = images.map((curr, i) => {
        return (
            <div className = "card">
                <div className ="card-container">
                <img src = {curr.image} className="image"/>
                    <p>Location: {curr.location}</p>
                    <p>City: {curr.city}</p>
                    <p>State: {curr.state}</p>
                    <p>County: {curr.country}</p>
                    <p>Description: {curr.notes}</p>
                    <button onClick={this.toggleEdit} className="edit" >Edit</button>
                    <button value={curr.image_id} onClick={this.props.delete} className="delete">Delete</button>    
                </div>
            </div>
        )
    })

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {userImages}
        </div>
    )
    }
}
export default Card;