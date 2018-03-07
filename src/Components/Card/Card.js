import React, {Component} from 'react';
import axios from 'axios';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: ''
        }
    }

    render(){
        console.log(this.props.images)
        const {images} = this.props;
    const userImages = images.map((curr, i) => {
        return (
            <div className = "card">
                <div className ="card-container">
                <img src = {curr.image} className="image"/>
                    <p>{curr.city}</p>
                    <p>{curr.location}</p>
                    <p>{curr.state}</p>
                    <p>{curr.country}</p>
                    <p>{curr.notes}</p>
                    <p>{curr.image_id}</p>
                </div>
                <div>
                    <button value={curr.image_id} onClick={this.props.delete} className="delete">Delete</button>
                </div>
            </div>
        )
    })

    return (
        <div>
        {userImages}
        </div>
    )
    }
}
export default Card;