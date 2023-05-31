import React from 'react';
import './box.css'
import arrow from './../../assets/right-arrow.svg';

function Box() {
    return ( 
        <div className='box'>
            <div className="first">
                <span className="radio"></span>
                <span className="text">Pokemons</span>
            </div>
            <div className="second">
                <span className="cnt">4</span>
                <img src={arrow} alt="right-arrow" />
            </div>
        </div> 
    );
}

export default Box;