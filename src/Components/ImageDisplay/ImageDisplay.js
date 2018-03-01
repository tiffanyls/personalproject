import React, {Component} from 'react';
import Card from './../Card/Card';

class ImageDisplay extends Component {
    constructor(props){
    super(props);
    this.state = {
        images: [],  

    };
}
componentDidMount(){
    axios.get('/api/userImages').then(response =>{
        this.setState({images: response.data});
    })
}

render(){
    const userImages = this.state.images.map((curr, ind) => {
    })
    return (
        <div className ="cardcontainer">
        <Card images={curr} key={ind}/>
        </div>
    )
}
}

export default ImageDisplay;