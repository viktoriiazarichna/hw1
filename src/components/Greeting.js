import React from 'react';

export const Greeting = (props) => {

    let {greeting} = props;

    return (
        <h4> {greeting} </h4>
    );
};