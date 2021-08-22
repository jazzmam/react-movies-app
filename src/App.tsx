import { useState, useEffect } from "react";
import './App.scss';
import HomePage from './components/Pages/HomePage';
import { Movie, fetchMovies } from "./services/movies.service";
import { MoviesContext } from "./services/context";
import MoviePage from './components/Pages/MoviePage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Dispatch } from "redux";
import { useDispatch } from 'react-redux';
import { addHomePageMovies } from './actions';

function App() {
  const [movies, updateMovies] = useState<Movie[]>([]);
  const [homePageMovies, updateHomePageMovies] = useState<Movie[]>([]);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    fetchMovies('1')
      .then(updateMovies)
      .catch(() => updateMovies([]));

    fetchMovies('1')
      .then(updateHomePageMovies)
      .catch(() => updateMovies([]));

    dispatch(addHomePageMovies(homePageMovies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <MoviesContext.Provider value={{ 
        movies, 
        updateMovies
        }}>
      <div className="App">
        <div className="container typography-base ">
          <BrowserRouter>
            <Switch>
              <Route path="/movie/:movieid" >
                <MoviePage />
              </Route>
              <Route path="/" >
                <HomePage></HomePage>           
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </MoviesContext.Provider>
  );
}
export default App;