import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../apiInt/Api";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      return await loginAPI(userData);
    }
     catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Login failed" }
      );
    }
  }
);
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("auth");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
       .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        state.user = {
         id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
         };

  state.token = action.payload.accessToken;
})
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;