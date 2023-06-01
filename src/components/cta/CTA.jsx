import React from 'react';
import './cta.css'

function CTA({
    text="default",
    type="primary",
    href,
}) {
    return ( 
        <a href={href}>
            <button 
                className={`btn btn-${type}`}
            >
                {text}
            </button> 
        </a>
    );
}

export default CTA;