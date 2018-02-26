import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';
import vplogo from './vplogo.png';


const Header = () => (
    <header class = "header">
    <div>
    <Link to={`/`}>
    <img src={vplogo} class ="logo" alt="VP Logo" /></Link>
    <div class="name"> VANTAGE POINT </div>
    </div>


    </header>
)

export default Header;


