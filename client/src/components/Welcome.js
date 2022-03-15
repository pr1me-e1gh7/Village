// Welcome page / Landing page
import React from 'react';
import bkgd from '../assets/stock-smalltown.jpg'
import logo from '../assets/Village-LogoRed (cropped)'
import Button from 'react-bootstrap/Button'
// import { BrowserRouter, Router, Link, Route } from 'react-router-dom';

export default function Welcome () {
    return (
        <>
            <img src={bkgd} alt="smalltown" className="custom-img absolute object-fill w-full h-full" style="opacity:20%; background-color:#FFFFFF;"></img>
            <main className="relative">
                <img src={logo} alt="Villagelogo" className="custom-img absolute object-fill h-auto" style="width:50%"></img>
                <Button style="background-color:#FF0000; color:#FFFFFF;"><a href='./modals/Signup.js'>Signup</a></Button>
                <Button style="background-color:#FF0000; color:#FFFFFF;"><a href='./modals/Login.js'>Login</a></Button>
            </main>
        </>
    );
};