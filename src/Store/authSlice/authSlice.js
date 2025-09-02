import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("user");
const parsedUser = savedUser ? JSON.parse(savedUser) : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: parsedUser,
    loading: false
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
