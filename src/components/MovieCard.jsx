import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  return (
    <div className="border border-black bg-white rounded-lg p-3">

      <img
        src={movie.image || movie.poster}
        alt={movie.title}
        className="h-70 object-cover rounded-md"
      />

      <div className="p-3">
        <h3 className="font-bold text-black text-sm mb-2 truncate">
          {movie.title}
        </h3>

        <p className="text-gray-700 text-sm">
          Genre: {movie.genres?.join(", ") || "N/A"}
        </p>

        <p className="text-yellow-500 text-sm">
          ⭐ Rating:  {movie.rating || "N/A"}
        </p>

        <p className="text-black text-sm">
          Price: ₹{movie.price || 300}
        </p>

        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: movie.id,
                name: movie.title,
                price: movie.price || 300,
              })
            )
          }
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default MovieCard;