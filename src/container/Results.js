import React, {Component} from 'react';
import axios from 'axios'
import classes from './Results.module.css'
import SearchBar from '../component/SearchBar'
import Detail from '../component/Detail'
import MoviePicture from '../component/MoviePicture'
import {Route, Link, Switch} from 'react-router-dom';
//import react from '../assets/img/react.jpg'

class Results extends Component{
   state={
       movie: '',
       keyword: 'america',
       details: ''
   }

    searchValueChanged = (event) => {
        console.log("Search Value : "+event.target.value)
        this.setState({
            keyword:event.target.value
        })
    }

    searchButtonClicked = () =>{
        this.setState({
            movie: ''
        }) 
        
        for(var i=1; i< 4; i++){
            axios.get('https://www.omdbapi.com/?apikey=b9bd48a6&s=' + this.state.keyword + "&page=" +i)
            .then(response => {
                     var  results = response.data.Search.map(movie => {
                       return  { 
                           title: movie.Title,
                           year: movie.Year,
                           poster: movie.Poster,
                           id: movie.imdbID
                       }
                       })
                       var movies = [
                           ...this.state.movie,
                          ...results
                       ]
                       console.log(movies)  
                       this.setState({        
                        movie: movies
                    })              
            })
            .catch(error => console.log(error) )
           }           
    }

    movieSelected = (id) => {
       // alert("Selected Movie IMDB ID === "+id)
       console.log(id)
       axios.get('https://www.omdbapi.com/?apikey=b9bd48a6&i='+id)
         .then(response => {
             var result = {
                title: response.data.Title,
                year:  response.data.Year,
                poster: response.data.Poster,
                id: response.data.imdbID,
                actors:response.data.Actors,
                awards:response.data.Awards,
                plot:response.data.Plot,
                released:response.data.Released,
                writer: response.data.Writer
             }
        console.log(result)
        this.setState({
            details: result
        })
         })
         .catch(error=> console.log(error))
    }


    render() {
        let movieResults;

        if(this.state.movie === ''){
            movieResults =      <div> 
                                    <MoviePicture />
                                </div>                             
        }
        else{
            movieResults = this.state.movie.map( movie => {
                return(
                    <li key={movie.id}>  
                        <div className={classes.EachMovie}>
                        <Link to="/detail">
                             <img src={movie.poster} alt={movie.title} onClick={()=>this.movieSelected(movie.id)}/>
                        </Link>  
                        <h4>{movie.title}</h4>
                        </div>                 
                        
                    </li>
                )
            })
        }       
        return(
            <Switch>
                <Route path="/" exact>
                {/* <img className={classes.Logo} src={react} alt="LOGO" /> */}
                    <div className={classes.Container}>
                        <SearchBar 
                            searchValueChanged={(event)=>this.searchValueChanged(event)}
                            searchButtonClicked={this.searchButtonClicked} />

                        <ul className={classes.Result}>
                            {movieResults}
                        </ul>
                    </div>    
                </Route>
                <Route path="/detail">
                    <Detail details={this.state.details}/>
                </Route>
            </Switch>

                    
        )
    }

}

export default Results