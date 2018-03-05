import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = "card">
                <img src = {this.props.images.image} className="image"/>
            <div className ="card-container">
                <p>{this.props.images.location}</p>
                <p>{this.props.images.city}</p>
                <p>{this.props.images.state}</p>
                <p>{this.props.images.country}</p>
                <p>{this.props.images.notes}</p>
                </div>
            </div>
        )
    }
}
export default Card;