import React from 'react';
import './box.css'
import arrow from './../../assets/right-arrow.svg';

/**
 * Types of Box
 * 1. Filter
 *      Three states
 *      - Inactive 
 *      - Focus (Hover) 
 *      - Active (Click)
 *      View
 *      - .radio <hide> 
 *      - .text  
 *      - .cnt <?conditional>
 *      - .right-arrow  
 * 2. Option
 *      Three states
 *      - Inactive 
 *      - Focus (Hover) 
 *      - Active (Click)
 *      View
 *      - .radio [radio/check]
 *      - .text  
 *      - .cnt <hide>
 *      - .right-arrow <hide>
 *      - Radio
 *      - Checkbox
 */

function Box() {
    return ( 
        <button className='box'>
            <div className="first">
                <span className="radio"></span>
                <span className="text">Pokemons</span>
            </div>
            <div className="second">
                <span className="cnt">4</span>
                <img src={arrow} alt="right-arrow" />
            </div>
        </button> 
    );
}

export default Box;