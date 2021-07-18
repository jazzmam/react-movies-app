import{ useContext} from "react";
import {Card, Grid, CardActionArea, CardActions, CardMedia, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Catalog.css';
import { MoviesContext } from "../../services/context";

const NavLink = require("react-router-dom").NavLink;

const MovieCards = () =>  {
  const { movies } = useContext(MoviesContext);  
  
  return (
    <div >
      <Grid container spacing={1}>
        {movies.map((movie) => (
          <Grid item xs={6} sm={2} key={movie.id}>
            <NavLink to={"movie/" + movie.id}>
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={"Poster of " + movie.title}
                    image={movie.picture}
                    title={movie.title}
                  />
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <FavoriteBorderIcon />
                  </Button>
                  <Button size="small" color="primary">
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
