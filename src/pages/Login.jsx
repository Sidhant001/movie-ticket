import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();   // 👈 add this

  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 PLACE IT RIGHT HERE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      loginUser({ username, password })
    );

    if (loginUser.fulfilled.match(result)) {
      navigate("/movies");   // 🔥 redirect after success
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>  {/* 👈 important */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;