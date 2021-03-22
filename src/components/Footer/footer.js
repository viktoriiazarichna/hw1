import React from 'react';
import "./footer.css";

export const Footer = (props) => {

   let {address, telephone, workingHours} = props;

    return (
        <div className="footer-style">
            <div> {address} </div>
            <div> {telephone} </div>
            <div> {workingHours} </div>
        </div>

    );
};