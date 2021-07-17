import{ useContext, useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';
import './Catalog.css';
import { MoviesContext } from "../../services/context";

var NavLink = require("react-router-dom").NavLink;

const MovieCards = () =>  {
  const { movies } = useContext(MoviesContext);  
  
  const [clickedMovieId, setClickedMovieId] = useState<number>(0);
  
   const SelectMovie = async (itemId: number) => {
    setClickedMovieId(itemId);
  }

  useEffect(() => {
    console.log('Current value of movie id state', clickedMovieId);
  }, [clickedMovieId]);

return (
    <div >
      <Grid container spacing={1}>
      {movies.map((movie) => (
        <Grid item xs={6} sm={2} key={movie.id}>
          <NavLink to={"movie/" + clickedMovieId}>
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={"Poster of " + movie.title}
                  height="140"
                  image={movie.picture}
                  title={movie.title}
                />
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <FavoriteBorderIcon />
                </Button>
                <Button size="small" color="primary" onClick={() => SelectMovie(movie.id)}>
                  {movie.rating}
                </Button>
              </CardActions>
            </Card>
          </NavLink>
        </Grid>
      ))}
      </Grid>
    </div>
  );
}

export default MovieCards;
