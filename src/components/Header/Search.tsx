import { useContext, useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.scss';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie, fetchMovies } from "../../services/movies.service";

const history = require("react-router-dom").UseHistory;

const Search = (props: any) => {
  
  const { updateMovies, searchedMovie, setSearchedMovie } = useContext(MoviesContext);
  


  const fetchMoviesList = (event: any) => {
    const searchedMovieValue = event.target.value;
    setSearchedMovie(searchedMovieValue);
  }

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 13) {
      fetchMoviesList(event);
    }
  }

  useEffect(()=>{

    console.log('SEARCHED MOIVE HAS CHANGED');
    history.push("/");

    if (searchedMovie) {
      fetchSearchedMovie(searchedMovie)
        .then((res) => updateMovies(res))
        .catch(() => updateMovies([]));
    } else {
      fetchMovies()
        .then((res) => updateMovies(res))
        .catch(() => updateMovies([]));
    }
  }, [searchedMovie, updateMovies]);

  return (
    <>
      <OutlinedInput 
          color="secondary" 
          className="seach-field" 
          type="string"  
          onBlur={fetchMoviesList} 
          onKeyDown={handleKeyPress}
          placeholder="Search" 
          defaultValue={searchedMovie}
          />
    </>
  );
}

export default Search;