import React, {Component} from 'react';
import Card from './../Card/Card';
import axios from 'axios';

class ImageDisplay extends Component {
    constructor(props){
    super(props);
    this.state = {
        images: []  

    };
}
componentDidMount(){
    axios.get('/api/userImages').then(response =>{
        this.setState({images: response.data});
    })
}

render(){
    const userImages = this.state.images.map((curr, ind) => {
    return (
        <Card images={curr} key={ind}/>
    )
})
    return (
        <div> 
            {userImages}
        </div>
    )
}
}


export default ImageDisplay;