import React from 'react';
import './Movie.css';
export const Movie = (props) => {

    let {title, year, genre, url} = props;

    return (
        <div className="movie-item">
            <div className="movie">
                <h3> {title} </h3>
                <p> {year}</p>
                <p> {genre}</p>
                <img src={url} alt=""/>
            </div>


        </div>

    );
};