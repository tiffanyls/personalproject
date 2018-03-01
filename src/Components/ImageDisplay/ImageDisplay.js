import React, {Component} from 'react';
import Card from './../Card/Card';

class ImageDisplay extends Component {
    constructor(props){
    super(props);
    this.state = {
        images: [],  

    };
}

render(){
    return (
        <div className ="cardbox">
        <Card />

        </div>
    )
}
}

export default ImageDisplay;