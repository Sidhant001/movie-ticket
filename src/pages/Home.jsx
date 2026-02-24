import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const movies = useSelector((state) => state.movie.movies);

  console.log("Movies from Redux:", movies);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;