import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {fetchMovies} from"../features/movieSlice"
import MovieCard from "../components/MovieCard"
function Movies(){
    const dispatch = useDispatch()
    const {movies,loading,error} = useSelector((state)=>state.movie);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <h2>Loading movies...</h2>;
  if (error) return <h2>{error}</h2>;
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
