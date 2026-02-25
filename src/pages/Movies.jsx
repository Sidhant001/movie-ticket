import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {fetchMovies} from"../features/movieSlice"
import MovieCard from "../components/MovieCard"
function Movies() {
  const dispatch = useDispatch();
  const { movies = [], loading, error } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <h2>Loading movies...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Movies 🎬</h1>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
  {movies.map((item) => (
    <MovieCard key={item.id} movie={item} />
  ))}
</div>
    </div>
  );
}
export default Movies;

