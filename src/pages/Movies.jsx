import React from "react";
import {useSelector} from "react-redux"
import MovieCard from "../components/MovieCard"
function Movies(){
    const movies = useSelector((state)=>state.movie.movies);

    return (
    <div>
      <h1>Movies</h1>

      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    )
}
export default Movies;
