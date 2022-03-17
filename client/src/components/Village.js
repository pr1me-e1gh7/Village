// Village "Your Village" - friends feed
// Profile "Your Health" health calendar
import React from 'react';
import logo from '../assets/villagelogoredcropped.png'
import bkgd from '../assets/supportbkgd.jpg'
import Button from 'react-bootstrap/Button'
import SideNav from './SideNav';

const Village = () => (
    <>
        <SideNav></SideNav>
        <div>
            <img src={bkgd} alt="support" className='custombkgd'></img>

        </div>
    </>
);

export default Village;