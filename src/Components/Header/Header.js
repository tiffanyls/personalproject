import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';
import vplogo from './vplogo.png';


const Header = () => (
    <header className = "header">
    <div>
    <Link to={`/`}>
    <img src={vplogo} className ="logo" alt="VP Logo" /></Link>
    <div className="name"> VANTAGE POINT </div>
    </div>


    </header>
)

export default Header;


