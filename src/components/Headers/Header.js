import React from 'react';
import './Header.css';

export const Header = (props) => {
    return (
       <div className="header">
           <div> Company: {props.company} </div>
           <div> Country: {props.country} </div>
           <button className='btn'> Menu </button>
       </div>

    );
}