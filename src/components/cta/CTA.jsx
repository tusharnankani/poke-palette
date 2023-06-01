import React from 'react';
import './cta.css'

function CTA({
    text="default",
    type="primary"
}) {
    return ( 
        <button className={`btn btn-${type}`}>{text}</button> 
    );
}

export default CTA;