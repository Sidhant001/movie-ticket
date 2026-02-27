import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      loginUser({ username, password })
    );

    if (loginUser.fulfilled.match(result)) {
      navigate("/movies");   
    }
  };

return (
  <div className="min-h-screen flex items-center justify-center ">
    
    <div className="bg-gray-300 p-8 rounded-xl shadow-lg w-80">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded bg-gray-500 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded bg-gray-500 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && (
        <p className="text-red-400 text-sm mt-4 text-center">
          {error}
        </p>
      )}
    </div>

  </div>
);
}

export default Login;