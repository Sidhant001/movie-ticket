import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/shows"
      );

     
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch movies");
    }
  }
);


const initialState = {
  movies: [],
  loading: false,
  error: null,
};


const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;

        state.movies = action.payload.map((show) => ({
          id: show.id,
          title: show.name,
          price: Math.floor(Math.random() * 300) + 100,
          image: show.image?.medium,
        }));
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default moviesSlice.reducer;