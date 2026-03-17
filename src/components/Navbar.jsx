import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleLogout = () => {
  dispatch(logout());       
  localStorage.removeItem("auth"); 
  navigate("/login");  
};

  const [dark, setDark] = useState(false);
  const [menuOpen , setMenuOpen] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
    <div className="bg-purple-700 dark:bg-gray-900 transition-colors duration-300 flex justify-between items-center px-6 py-3">
      
      <h1 className="text-white font-bold text-lg">
        🎬 Movie Booking
      </h1>

      <div className="hidden md:flex items-center gap-6">

        <Link to="/movies" className="text-white hover:text-gray-200">
          Movies
        </Link>

        <Link to="/cart" className="text-white hover:text-gray-200">
          Cart 🛒 ({totalQuantity})
        </Link>

        <Link to="/add-movie" className="text-white hover:text-gray-200">
          Add Movies
        </Link>

        <button 
         onClick = {handleLogout}
        className="text-white hover:text-gray-200">
          Logout
        </button>

        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-white text-black dark:bg-gray-700 dark:text-white transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>
      <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
    </div>
          {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="relative bg-white dark:bg-gray-800 w-64 h-full p-5 flex flex-col gap-5">

            <button
              className="text-right text-xl hover:text-red-500 text-black dark:text-white"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <Link to="/movies" onClick={() => setMenuOpen(false)} className="text-black dark:text-white hover:scale-105">
              Movies
            </Link>

            <Link to="/cart" onClick={() => setMenuOpen(false)} className="text-black dark:text-white hover:scale-105">
              Cart 🛒 ({totalQuantity})
            </Link>

            <Link to="/add-movie" onClick={() => setMenuOpen(false)} className="text-black dark:text-white hover:scale-105">
              Add Movies
            </Link>

            <button onClick={handleLogout} className="text-black dark:text-white hover:scale-105">
              Logout
            </button>

            <button
              onClick={() => setDark(!dark)}
              className="mt-4 px-3 py-2 rounded bg-gray-300 dark:bg-gray-600 hover:scale-105"
            >
              {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;