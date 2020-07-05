import React from 'react';
import classes from './MoviePicture.module.css';
import picture from '../assets/img/movie.png';

const moviePicture = () => (
    <div className={classes.MoviePicture}>
        <img src={picture} alt="movies" />
    </div>
)

export default moviePicture