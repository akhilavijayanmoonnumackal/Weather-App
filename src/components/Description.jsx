import React from "react";
import './Description.css';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Description = () => {
    return (
        <div className="section section__description">
            <div className="card">
                <div className="description__card-icon">
                     <AiOutlineArrowDown/>
                     <small>min</small>
                </div> 
                <h2>32 °C</h2>
            </div>
            <div className="card">
                <div className="description__card-icon">
                     <AiOutlineArrowDown/>
                     <small>min</small>
                </div> 
                <h2>32 °C</h2>
            </div>
            <div className="card">
                <div className="description__card-icon">
                     <AiOutlineArrowDown/>
                     <small>min</small>
                </div> 
                <h2>32 °C</h2>
            </div>
            <div className="card">
                <div className="description__card-icon">
                     <AiOutlineArrowDown/>
                     <small>min</small>
                </div> 
                <h2>32 °C</h2>
            </div>
            
        </div>
    )
}

export default Description;