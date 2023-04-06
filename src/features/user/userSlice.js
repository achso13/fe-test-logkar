import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  password: "",
  email: "",
  phone: "",
  address: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return { ...state, ...action.payload };
    },
    logout: (state) => {
      return initialState;
    },
    updateUser: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;
