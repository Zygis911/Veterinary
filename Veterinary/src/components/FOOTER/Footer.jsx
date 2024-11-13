import React from "react";
import './Footer.css'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

export function Footer() {
    return (
        <>
        <div className="footer">
            <div className="social">
                <FaFacebook className="icon" />
                <FaInstagram className="icon" />
                <FaTwitter className="icon" />
                <FaPinterest className="icon" />
            </div>
            <div className="container">
                <div className="col">
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Detais</p>
                    <p>Planning</p>
                    <p>About us</p>
                </div>
                <div className="col">
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Detais</p>
                    <p>Planning</p>
                    <p>About us</p>
                </div>
                <div className="col">
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Detais</p>
                    <p>Planning</p>
                    <p>About us</p>
                </div>
                <div className="col">
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Detais</p>
                    <p>Planning</p>
                    <p>About us</p>
                </div>
            </div>
        </div>
        </>
    )
}