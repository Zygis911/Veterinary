import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'
export function Hero() {

    return (
       <div className="hero">
            <div className="content">
                <h1>Veterinary services</h1>
                <p className="search-text">Search for animals</p>
                <form className="search">
                    <div>
                        <input type="text" placeholder="Enter Keyword.." />
                    </div>
                    <div className="radio">
                        <input type="radio" checked />
                        <label>Buy</label>
                        <input type="radio"/>
                        <label>Test</label>
                        <button type='submit'><AiOutlineSearch className='icon' /> </button>
                    </div>
                </form>
            </div>

       </div>
    )
}