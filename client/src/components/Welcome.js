// Welcome page / Landing page
import React from 'react';
import bkgd from '../assets/stocksmalltown2.gif'
import logo from '../assets/villagelogoredcropped.png'
import Button from 'react-bootstrap/Button'

const Welcome = () => (
    <>
            <img src={bkgd} alt="smalltown" className='custombkgd'></img>
            <div className="contentwelcome">
                <ul>
                    <li><p>“Your health, your Village, your world.”</p></li>
                    <li><img src={logo} alt="Villagelogo" className='customlogo'></img></li>

                    <li>
                        <Button className='custombutton'><a href='./Signup'>Signup</a></Button>
                        <Button className='custombutton'><a href='./Login'>Login</a></Button>
                    </li>
                </ul>
            </div>
    </>
);

export default Welcome;