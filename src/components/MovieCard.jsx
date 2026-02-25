import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function MovieCard({ movie }) {
  return (
    <div className="border border-gray-400 rounded-lg p-3">
      
      <img
        src={movie.image}
        alt={movie.title}
        className=" h-70 object-cover rounded-md"
      />

      <div className="p-3">
        <h3 className="font-bold text-sm mb-3 truncate">
          {movie.title}
        </h3>

        <p className="text-white text-sm">
          Price: ₹{movie.price || 300}
        </p>

        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Book Now
        </button>
      </div>
    </div>
  );
}export default MovieCard;