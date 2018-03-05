import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search.css';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: "",
            results: []
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({term: e.target.value});
      }
    
      handleClick(e) {
          e.preventDefault()
          axios.get(`/api/searchAll/?searchInfo=${this.state.term}`).then(response => {
              this.setState({results: response.data});
          })
      }

    render(){
        const results= this.state.results.map((curr, ind) => {
            return (
                <div>
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
                </div>
        )}) 
        return (
            <div className ="main">
            <form onSubmit= {(e) => this.handleClick(e)}>
            <input type="text" term={this.state.value} onChange ={this.handleChange} placeholder="Search" class="search"/></form> 
            <button onClick={this.handleClick} className ="search-button">Search</button> 
            </div>
        )
    }
}


export default SearchBar;