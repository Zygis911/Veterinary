import './Navbar.css'
import React , {useState} from "react";
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import { SiAnimalplanet } from "react-icons/si";
import { Link } from "react-router-dom";


export function Navbar() {
    
 const [click, setClick] = useState(false);
 const handleClick = () => {
    setClick(!click)
 }

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><SiAnimalplanet />Animals </span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/best'>Treatments</Link></li>
                    <li><Link to='/featured'>Animals</Link></li>
                    <li><a href="#">Contacts</a></li>
                    <button className='btn'>Sign in</button>
                </ul>             
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon'/>) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    )
}