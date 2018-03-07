import React, {Component} from 'react';
import Card from './../Card/Card';
import axios from 'axios';




class ImageDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: []  

        };
        this.deleteImage = this.deleteImage.bind(this);
    }

    componentDidMount(){
        axios.get('/api/userImages').then(response =>{
            this.setState({images: response.data});
        })
    }

    deleteImage(id){
        console.log(id.target.value)
        axios.delete(`/api/deleteImage/${id.target.value}`).then(res =>{
            console.log(res)
        })
    }

    render(){
        return (
            <div> 
                <Card delete={this.deleteImage} images={this.state.images}/>
            </div>
        )
    }
}

export default ImageDisplay;