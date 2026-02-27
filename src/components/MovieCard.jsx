import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function MovieCard({ movie }) {
    const dispatch = useDispatch()
  return (
    <div className="border border-gray-700 bg-gray-800 rounded-lg p-3">
      
      <img
        src={movie.image}
        alt={movie.title}
        className=" h-70 object-cover rounded-md"
      />

      <div className="p-3">
        <h3 className="font-bold text-sm mb-3 truncate">
          {movie.title}
        </h3>

        <p className="text-white  text-sm">
          Price: ₹{movie.price || 300}
        </p>

        <button
        onClick={() =>dispatch(addToCart({
         id: movie.id,
         name: movie.title,
         price: movie.price,
        }))}
         className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Add To Cart
        </button>
      </div>
    </div>
  );
}export default MovieCard;