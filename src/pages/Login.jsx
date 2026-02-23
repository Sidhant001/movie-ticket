import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useState } from "react";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;