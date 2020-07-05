import React from 'react';
import classes from './SearchBar.module.css';

const searchBar = (props) => (
    <div className={classes.SearchBar}>
        <label>Search Here  </label>
        <input val={props.value} placeholder=" Enter any movie name" onChange={(e) =>props.searchValueChanged(e)}></input>
        <button onClick={props.searchButtonClicked}>Go</button>
    </div>
);

export default searchBar;