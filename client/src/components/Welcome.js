// Welcome page / Landing page
import React from 'react';
import bkgd from '../assets/stocksmalltown.jpg'
import logo from '../assets/villagelogoredcropped.png'
import Button from 'react-bootstrap/Button'

const Welcome = () => (
    <>
            <img src={bkgd} alt="smalltown" className="custom-bkgd"></img>
            <main className="relative">
                <img src={logo} alt="Villagelogo"></img>
                <Button className='custom-button'><a href='./Signup'>Signup</a></Button>
                <Button className='custom-button'><a href='./Login'>Login</a></Button>
            </main>
    </>
);

export default Welcome;