import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const cartItem = cartItems.find((item) => item.id === movie.id);

  return (
    <div className="border border-black bg-white dark:bg-gray-600 rounded-lg p-3">

      <img
        src={movie.image || movie.poster}
        alt={movie.title}
        className="h-70 object-cover rounded-md"
      />

      <div className="p-3">
        <h3 className="font-bold text-black dark:text-white text-sm mb-2 truncate">
          {movie.title}
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Genre: {movie.genres?.join(", ") || "N/A"}
        </p>

        <p className="text-yellow-500 text-sm">
          ⭐ Rating: {movie.rating || "N/A"}
        </p>

        <p className="text-black dark:text-white text-sm">
          Price: ₹{movie.price || 300}
        </p>

        {!cartItem ? (

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

        ) : (

          <div className="flex items-center gap-3 mt-2">

            <button
              onClick={() => dispatch(removeFromCart(movie.id))}
              className="bg-red-500 text-white px-4 rounded"
            >
              -
            </button>

            <span className="text-black dark:text-white font-semibold text-sm text-center px-2">
              {cartItem?.quantity} in cart
            </span>

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
              className="bg-green-500 text-white px-4 rounded"
            >
              +
            </button>

          </div>

        )}
      </div>
    </div>
  );
}

export default MovieCard;