import React from 'react';
import './form.css';

export const RegistrationForm = (props) => {

    let {name, surname, age} = props;

    return (
        <div className="form">
            <div><b> name: </b> {name}  </div>
            <div><b> surname: </b> {surname}  </div>
            <div><b> age: </b> {age} </div>
        </div>
    );
};