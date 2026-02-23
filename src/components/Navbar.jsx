import React, { useState, useContext } from "react";
import { configureStore } from "@reduxjs/toolkit";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-purple-700 flex justify-between items-center px-6 py-3 relative">
      <h1 className="text-white font-bold text-lg">Login page</h1>

      <div className="relative">
        
        <div
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-teal-400 flex items-center justify-center text-white font-semibold cursor-pointer"
        >
          {user.name.slice(0, 2).toUpperCase()}
        </div>

        {open && (
          <div className="absolute right-0 mt-3 w-56 bg-gray-800 rounded-xl shadow-lg text-white p-4 space-y-3">
            <button className="block w-full text-left hover:text-blue-400">
              👤 View Profile
            </button>
            <button className="block w-full text-left hover:text-blue-400">
              🔑 Change Password
            </button>
            <hr className="border-gray-600" />
            <button
              onClick={logout}
              className="block w-full text-left hover:text-red-400"
            >
              ⏻ Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;