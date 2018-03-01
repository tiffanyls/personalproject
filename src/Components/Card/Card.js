import React, {Component} from 'react';

class Card extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className = "card">
                <img src = {this.state.images}/>
            <div className ="container">
                <p>{this.state.images.location}</p>
                <p>{this.state.images.city}</p>
                <p>{this.state.images.state}</p>
                <p>{this.state.images.country}</p>
                <p>{this.state.images.notes}</p>
                </div>
            </div>
        )
    }
}
export default Card;