import React from "react";
import {useSelector} from "react-redux"

function Movies(){
    const movies = useSelector((state)=>state.movie.movies);

    return(
        <div>
            <h1>Movies</h1>

            {movies.map((movie)=>
            <div key = {movie.id}>
                <h3>{movie.name}</h3>
                <h3>{movie.price}</h3>
                <button> Book Now </button>
           </div>
           )}
        </div>
    )
}
export default Movies;
