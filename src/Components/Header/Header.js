import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';
// import vplogo from './vplogo.png';
import VP from './VP.png';


const Header = () => (
    <div>
        <header className = "header">
    <Link to={`/`}>
    {/* <img src={vplogo} className ="logo" alt="VP Logo" /></Link> */}
    <img src={VP} className="logo" alt="VP Logo" /></Link>
    <div className="name"> VANTAGE POINT </div>
        </header>
    </div>
    
)

export default Header;


