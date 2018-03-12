import React, {Component} from 'react';
import axios from 'axios';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            isEditing: false,
            num: "",
            images:[],
            newObject: {}
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        axios.get('/api/userImages').then(response =>{
            this.setState({images: response.data});
        })
    }
    
    handleChange(stateKey, event){
        let newObject = Object.assign({}, this.state.images[this.state.currentItem])
        newObject[stateKey] = event.target.value;
        let updatedImages = [...this.state.images];
        updatedImages[this.state.currentItem] = newObject;
        this.setState({newObject, images: updatedImages })
    }

    toggleEdit(num, i){
        this.setState({isEditing: true, selected: num, currentItem: i})
    }

    saveChange(e){
        axios.put('/api/updateImage', {updatedInfo: this.state.newObject})
        this.setState({isEditing: false})
    }


    deleteImage(id){
        console.log(id.target.value)
        axios.delete(`/api/deleteImage/${id.target.value}`).then(res =>{
            // console.log(res)
        })
    }


    render(){
        
        // console.log(this.props.images)
        const {images} = this.state;
        const userImages = images.map((curr, i) => {
            console.log(curr)
        return (
            <div className = "card">
                <div className ="card-container">
                <img src = {curr.image} className="image"/>
                   {this.state.isEditing && this.state.selected === curr.image_id ? <div> <p>Location: <input value={curr.location} onChange ={(event) => this.handleChange("location", event)}/></p>
                    <p>City: <input value ={curr.city} onChange= {(event) => this.handleChange("city", event)}/></p>
                    <p>State: <input value = {curr.state}onChange= {(event) => this.handleChange("state", event)}/></p>
                    <p>County: <input value = {curr.country}onChange= {(event) => this.handleChange("country", event)}/></p>
                    <p>Description: <input value = {curr.notes} onChange= {(event) => this.handleChange("notes", event)}/></p>
                    <button onClick={()=>this.saveChange(curr.image_id, i)} className="save">Save</button></div> : <div> <p>Location: {curr.location}</p>
                    <p>City: {curr.city}</p>
                    <p>State: {curr.state}</p>
                    <p>County: {curr.country}</p>
                    <p>Description: {curr.notes}</p>
                    <button onClick={()=>this.toggleEdit(curr.image_id, i)} className="edit" >Edit</button></div>}
                    <button value={curr.image_id} onClick={this.deleteImage} className="delete">Delete</button>    
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