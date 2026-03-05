import React,{useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {fetchMovies} from"../features/movieSlice"
import MovieCard from "../components/MovieCard"

function Movies() {
  const dispatch = useDispatch();
  const [search ,setSearch] = useState("");

  const { movies = [], loading, error } = useSelector(
    (state) => state.movie
  );

useEffect(() => {
  if (movies.length === 0) {
    dispatch(fetchMovies());
  }
}, [dispatch, movies.length]);

  if (loading) return <h2>Loading movies...</h2>;
  if (error) return <h2>{error}</h2>;

  const filterMovies = movies.filter((movie) => {
    const searchText = search.toLowerCase().trim();

    const titleMatch = movie.title
      ? movie.title.toLowerCase()
      .includes(searchText)
      :false;

    const genreMatch = Array.isArray(movie.genres)
    ? movie.genres.some((g) =>
        g && g.toLowerCase().includes(searchText)
      )
    : false;

    return titleMatch || genreMatch;
  });

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white p-6">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Movies 🎬</h1>

        <input
          type="text"
          placeholder="Search movies by title or genre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 p-2 rounded bg-gray-200 dark:bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filterMovies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default Movies;

