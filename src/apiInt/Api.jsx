//Login API
import axios from "axios";

const API_URL = "https://dummyjson.com/auth";

export const loginAPI = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    {
      username: userData.username,
      password: userData.password,
      expiresInMins: 30,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

//Movies API

export const fetchMoviesAPI = async () => {
  const response = await axios.get(
    "https://api.tvmaze.com/shows"
  );

  return response.data;
};