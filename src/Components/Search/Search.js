import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: "",
            results: []
        }
    }
    handleChange(e) {
        this.setState({term: event.target.value});
      }
    
      handleClick(e) {
          e.preventDefault()
          axios.get(`/api/searchAll/?searchInfo=${this.state.term}`).then(response => {
              this.setState({results: response.data});
          })
      }

    render(){
        const results= this.state.results.map((curr, ind) => {
            return 
            <div className="image-results">
                <img src = {this.curr.images.image}/>
                <p>{curr.location}</p>
                <p>{curr.city}</p>
                <p>{curr.state}</p>
                <p>{curr.country}</p>
                <p>{curr.notes}</p>
            </div>
            <div className="user-results">
                <p>{curr.id}</p>
            </div>
        })
        return (
            <div>
            <form onSubmit= {(e) => this.handleClick(e)}>
            <input type="text" term={this.state.value} onChange ={this.handleChange} placeholder="Search"/><form> 
            <button onClick={this.handleClick}></button> 

            </div>
        )
    }
}

export default Search;