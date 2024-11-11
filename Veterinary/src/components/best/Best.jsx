import React from "react";
import "./best.css";
import animal1 from '../../assets/Foto1.jpg'
import animal2 from '../../assets/foto2.jpg'
import animal3 from '../../assets/foto3.jpg'

export function Best() {
return (
    <div className="best">
        <h1>Find the best rated treatments</h1>
        <div>
            <p><span className="bold">All</span></p>
            <p>Test1</p>
            <p>Test2</p>
            <p>Test3</p>
        </div>
        <div className="container">
            <img src={animal1} alt='' />
            <img src={animal2} alt='' />
            <img src={animal3} alt='' />
        </div>
        <button className="btn">View All</button>
    </div>
)
}