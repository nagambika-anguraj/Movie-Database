import React from 'react'
import classes from './Detail.module.css'

const detail = (props) => (
    <div className={classes.Detail}>
        <h2>{props.details.title}</h2>
        <img src={props.details.poster} alt={props.details.title}></img>
        <br/><br/>
        <div className={classes.Items}><span>Year &nbsp;</span>{props.details.year}</div> 
        <div className={classes.Items}><span>Actors &nbsp; </span>{props.details.actors}</div> 
        <div className={classes.Items}><span>Writer &nbsp;</span>{props.details.writer}</div> 
        <div className={classes.Items}><span>Awards &nbsp;</span>{props.details.awards}</div> 
        <br/><br/>
        <div className={classes.Items}>{props.details.plot}</div> 
    </div>
)

export default detail;