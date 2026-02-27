import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="bg-purple-700 flex justify-between items-center px-6 py-3">
      <h1 className="text-white font-bold text-lg">
        🎬 Movie Booking
      </h1>

      <div className="flex items-center gap-6">
        <Link to="/movies" className="text-white hover:text-gray-200">
          Movies
        </Link>

        <div className="flex items-center gap-6">
        <Link to="/login" className="text-white hover:text-gray-200">
          Logout
        </Link>

        <Link to="/cart" className="text-white hover:text-gray-200">
          Cart 🛒 ({totalQuantity})
        </Link>
      </div>
    </div>
    </div>
  );

}
export default Navbar;