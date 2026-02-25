import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Price: ₹{movie.price}</p>

      <button onClick={() => dispatch(addToCart(movie))}>
        Book Now
      </button>
    </div>
  );
}

export default MovieCard;