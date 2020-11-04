import React from 'react';
import './Center.css';

function Center (props) {

    return (
        <div className= 'Center'>
            {props.children}
        </div>
    )
}

export default Center;