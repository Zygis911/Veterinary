import React from "react";
import "./Featured.css";

export function Featured() {
  return (
    <>

        <div className="featured">
            <h1 className='featured-rext'>Top featured listings</h1>
            <p>Selected by state blablabla</p>
            <div className='container'>
                <img src={} alt="" />
                <img src={} alt="" />
                <img src={} alt="" />
                <img src={} alt="" />
                <img src={} alt="" />
                <div className='span-3 img-details'>
                    <div className="top">
                        <h2>Adresiukas</h2>
                        <p>Parduodame!!</p>
                        <p classname='price'>215125</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
