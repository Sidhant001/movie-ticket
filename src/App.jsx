import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;