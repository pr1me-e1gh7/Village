// Profile "Your Health" health calendar
import React from 'react';
import logo from '../assets/villagelogoredcropped.png'
import bkgd from '../assets/mentalhealthbkgd.jpg';
import Button from 'react-bootstrap/Button';
import SideNav from './SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1 } from '@fortawesome/free-solid-svg-icons'
import { fa2 } from '@fortawesome/free-solid-svg-icons'
import { fa3 } from '@fortawesome/free-solid-svg-icons'
import { fa4 } from '@fortawesome/free-solid-svg-icons'
import { fa5 } from '@fortawesome/free-solid-svg-icons'
import { fa6 } from '@fortawesome/free-solid-svg-icons'
import { fa7 } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Profile = () => (
    <>
        <SideNav></SideNav>
        <img src={bkgd} alt="support" className='custombkgd'></img>
        <div className='contentProfile'>
            <div class="container">
                <p className='containertxt'>
                    Health Calendar <a><FontAwesomeIcon icon={faCirclePlus} /></a>
                </p>
                <div class="grid-x">
                    <a class="grid-container-card"><FontAwesomeIcon icon={fa1} /></a>
                    <a class="grid-container-card"><FontAwesomeIcon icon={fa2} /></a>
                    <a class="grid-container-card"><FontAwesomeIcon icon={fa3} /></a>
                    <a class="grid-container-card"><FontAwesomeIcon icon={fa4} /></a>
                    <a class="grid-container-card"><FontAwesomeIcon icon={fa5} /></a>
                    <a class="grid-container-card"><FontAwesomeIcon icon={fa6} /></a>
                    <a class="grid-container-card"><FontAwesomeIcon icon={fa7} /></a>
                </div>
            </div>
        </div>
    </>
);

export default Profile;