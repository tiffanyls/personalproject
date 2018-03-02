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
          axios.get('/api/searchAll').then.(response => {
              this.setState({results: response.data});
          })
      }

    render(){
        const results= this.state.results.map((curr, ind) => {
            return 
            <div className="image-results">
                <
            </div>
        }
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