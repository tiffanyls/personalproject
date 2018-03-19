import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search.css';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: "",
            results: [],
            searched: true
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.moveSearched=this.moveSearched.bind(this);
    }
    handleChange(e) {
        this.setState({term: e.target.value});
      }
    
    handleClick(e) {
          e.preventDefault()
          axios.get(`/api/searchAll/?searchInfo=${this.state.term}`).then(response => {
              this.setState({results: response.data});
              this.props.removeImage();
                this.moveSearched();
          })
      }

      moveSearched(){
          this.setState({searched: false})
      }

    render(){
        const results= this.state.results.map((curr, ind) => {
            return (
                <div key={ind}>
            <div className = "results-card">
            <div className="image-results">
                <img src = {curr.image} className="image-return"/>
                <p>{curr.location}</p>
                <p>{curr.city}</p>
                <p>{curr.state}</p>
                <p>{curr.country}</p>
                <p>{curr.notes}</p>
                <p>Latitude {curr.lat}</p>
                <p>Longitude {curr.lng}</p>
            </div>
                </div>
                </div>
        )}) 
        return (
            <div className ="main">
            <form onSubmit= {(e) => this.handleClick(e)}>
            <input type="text" term={this.state.value} onChange ={this.handleChange} placeholder="Search" className={this.state.searched ? "search" : "other"}/>
            <button onClick={this.handleClick} className={this.state.searched ? "search-button": "other-button"}>Search</button> </form> 
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '30px'}}>
            {results}
            </div>
            </div>
        )
    }
}


export default SearchBar;

