import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-purple-700 dark:bg-gray-900 transition-colors duration-300 flex justify-between items-center px-6 py-3">
      
      <h1 className="text-white font-bold text-lg">
        🎬 Movie Booking
      </h1>

      <div className="flex items-center gap-6">

        <Link to="/movies" className="text-white hover:text-gray-200">
          Movies
        </Link>

        <Link to="/cart" className="text-white hover:text-gray-200">
          Cart 🛒 ({totalQuantity})
        </Link>

        <Link to="/add-movie" className="text-white hover:text-gray-200">
          Add Movies
        </Link>

        <Link to="/login" className="text-white hover:text-gray-200">
          Logout
        </Link>

        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-white text-black dark:bg-gray-700 dark:text-white transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>
    </div>
  );
};

export default Navbar;