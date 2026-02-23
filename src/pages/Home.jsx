import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">
        Dashboard
        </h2>
      </div>
    </div>
  );
};

export default Home;