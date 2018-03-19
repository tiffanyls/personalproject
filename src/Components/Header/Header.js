import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Header.css";
import VP from "./VP.png";
import UserUploader from "./../UserAccount/UserUploader/UserUploader";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      toggleModal: false
    };
    // this.toggleModal = this.toggleModal.bind(this);
  }

  // toggleModal(e) {
  //   this.setState({ toggleModal: !this.state.toggleModal });
  // }
  componentDidMount() {
    axios.get("/api/checkUser").then(response => {
      // console.log(response)
      if (response.data) {
        this.setState({ user: true });
      } else {
        this.setState({ user: false });
      }
    });
  }

  render() {
    return (
      <div>
        <header className="header">
          <Link to={`/`}>
            <img src={VP} className="logo" alt="VP Logo" />
          </Link>
          <div className="name"> VANTAGE POINT </div>
          <div>
            {!this.state.user ? (
              <button
                onClick={() =>
                  (window.location.href = "/login")
                }
                className="login"
              >
                Login/Sign Up
              </button>
            ) : (
              <a href="/logout">
                <button>Logout</button>
              </a>
            )}
            {this.state.user && (
              <button className='link'><Link to={'/imageuploader'} >
                Upload New
              </Link></button>
            )}
            
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
