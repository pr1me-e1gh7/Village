// SideNav, only apparent once logged in
import React from 'react';
import villagelogo from '../assets/villageheartwhite96px.png'
import { useState } from 'react';
// import wheatBread 

// const [bread, setBread] = useState (wheatBread)

const SideNav = () => (
    <div className='contentSideNav'>
        <ul className='contentNavList'>
            <li className='contentNavLinks'><img src={villagelogo} alt="villagelogo" className='customnavlogo'></img></li>
            <li className='contentNavLinks'><a href="./Profile">Your Profile</a></li>
            <li className='contentNavLinks'><a href="./Village">Your Village</a></li>
            <li className='contentNavLinks'><a href="https://www.who.int/" target="_blank">Your World</a></li>
            <li className='contentNavLinks'><a href="/">Sign Out</a></li>
        </ul>
    </div>
);

export default SideNav