import React from "react";
import "./Featured.css";
import animal4 from '../../assets/foto4.jpg';
import animal5 from '../../assets/foto5.jpg';
import animal6 from '../../assets/foto6.jpg';
import animal7 from '../../assets/foto7.jpg';
import animal8 from '../../assets/foto8.jpg';

export function Featured() {
  return (
    <div className="featured">
        <h1 className="featured-text">Top featured listings</h1>
        <p>Selected by state blablabla</p>
        
        <div className="container">
            <img src={animal4} alt="" />
            <img src={animal5} alt="" />
            <img src={animal6} alt="" />
            <img src={animal7} alt="" />
            <img src={animal8} alt="" /> 

            <div className="span-3 img-details">
                <div className="top">
                    <h2>Adresiukas</h2>
                    <p>Parduodame!!</p>
                    <p className="price">215125</p>
                </div>

                <div className="info-grid">
                    <div>
                        <div className="info">
                            <p className="bold">tipo bedoromus</p><p>5</p>
                        </div>
                        <div className="info">
                            <p className="bold">shitters</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Square feet tipo</p><p>3453</p>
                        </div>
                        <div className="info">
                            <p className="bold">payment</p><p>7435</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="span-2 right-img-details">
                <p>sfafasf</p>
                <button className="btn">view some shit</button>
            </div>
        </div>
    </div>
  );
}