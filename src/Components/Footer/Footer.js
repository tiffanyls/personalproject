import React, {Componen} from 'react';
import './Footer.css';
import fb from './fb.jpeg';
import twitter from './twitter.png';
import inst from './inst.png';

const Footer = () => {
    return (
    <div>
   <div className ='list'>
       <li> About Us </li>
       <li> Contact US </li>
       <li> Advertise </li>
   </div>
    <div className = 'social'>
       <img src = {fb} className='fb' alt='Facebook'/>
       <img src = {inst} className='inst' alt='Instagram'/>
       <img src = {twitter} className='twitter' alt='Twitter'/>
    </div>
    </div>
    )}

export default Footer;