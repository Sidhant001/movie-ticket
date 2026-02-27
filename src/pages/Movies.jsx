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
    dispatch(fetchMovies());
  }, [dispatch]);

   if (loading) return <h2>Loading movies...</h2>;
   if (error) return <h2>{error}</h2>;
   const filterMovies = movies.filter((movie)=>
   movie.title.toLowerCase().includes(search.toLowerCase())
 )

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
        <div className="mb-6 flex justify-center">
  <input
    type="text"
    placeholder="Search movies..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-80 p-2 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
      <h1 className="text-3xl font-bold mb-6">Movies 🎬</h1>

     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
     {filterMovies.map((item) => (
     <MovieCard key={item.id} movie={item} />
  ))}
</div>
    </div>
  );
}
export default Movies;

