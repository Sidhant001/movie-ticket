import React,{useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {fetchMovies} from"../features/movieSlice"
import MovieCard from "../components/MovieCard"

function Movies() {
  const dispatch = useDispatch();
  const [search ,setSearch] = useState("");
  const [sort , setSort] = useState("")
  const [genre , setGenre] =useState("all")
  const [currentPage , setCurrentPage] = useState(1);

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
    ? movie.title.toLowerCase().includes(searchText)
    : false;

  const genreMatch = Array.isArray(movie.genres)
    ? movie.genres.some((g) => g && g.toLowerCase().includes(searchText))
    : false;

  const genreFilter =
    genre === "all" ||
    (Array.isArray(movie.genres) && movie.genres.includes(genre));

  return (titleMatch || genreMatch) && genreFilter;
     });
     let sortedMovies = [...filterMovies];

     if (sort === "ratingHigh") {
       sortedMovies.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }

    if (sort === "ratingLow") {
       sortedMovies.sort((a, b) => (a.rating || 0) - (b.rating || 0));
         }
         const moviesPerPage = 10;

     const indexOfLastMovie = currentPage * moviesPerPage;
     const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

    const currentMovies = sortedMovies.slice(
     indexOfFirstMovie,
     indexOfLastMovie
      );

    const totalPages = Math.ceil(sortedMovies.length / moviesPerPage);

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
      <div className="flex gap-4 mt-4">

  <select
    value={genre}
    onChange={(e) => setGenre(e.target.value)}
    className="p-1 flex  my-2 rounded text-black bg-white border border-gray-700 dark:border-gray-300 "
  >
    <option value="all">All Genres</option>
    <option value="Drama">Drama</option>
    <option value="Action">Action</option>
    <option value="Comedy">Comedy</option>
    <option value="Crime">Crime</option>
    <option value="Adventure">Adventure</option>
  </select>

  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    className="p-1 flex  my-2 rounded bg-white text-black  border border-gray-700 dark:border-gray-300"
  >
    <option value="">Sort</option>
    <option value="ratingHigh">Rating High → Low</option>
    <option value="ratingLow">Rating Low → High</option>
  </select>

</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {currentMovies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
        <div className="flex justify-center gap-3 mt-8">

  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
    className="px-4 py-2 bg-gray-400 rounded"
  >
    Prev
  </button>

  <span className="px-4 py-2">
    Page {currentPage} of {totalPages}
  </span>

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
    className="px-4 py-2 bg-gray-400 rounded"
  >
    Next
  </button>

   </div>
    </div>
    </div>
  );
}

export default Movies;

