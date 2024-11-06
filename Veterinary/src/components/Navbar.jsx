import './Navbar.css'
import React , {useState} from "react";
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import { SiAnimalplanet } from "react-icons/si";


export function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><SiAnimalplanet />Animals </span></h1>
                <button className='btn'>Sign in</button>
                <ul className='nav-menu'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
                <div className='hamburger'>
                    <HiOutlineMenuAlt4 />
                </div>
            </div>
        </div>
    )
}